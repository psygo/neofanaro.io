"use server"

import { desc, eq, gte, sql } from "drizzle-orm"

import {
  db,
  articlesTable,
  articleVotesTable,
  commentsTable,
  commentVotesTable,
  gamesTable,
  leaguesTable,
  players,
} from "@db"

export type TopArticleRow = {
  id: number
  path: string
  titleEn: string
  titlePt: string
  views: number
  commentCount: number
  upvotes: number
  downvotes: number
}

export type TopCommenterRow = {
  playerId: number
  name: string
  nick: string
  commentCount: number
}

export type AnalyticsOverview = {
  totalArticleViews: number
  publishedArticleCount: number
  draftArticleCount: number
  topArticlesByViews: TopArticleRow[]
  topArticlesByComments: TopArticleRow[]
  totalPlayers: number
  moderatorCount: number
  totalComments: number
  commentsLast7Days: number
  commentsLast30Days: number
  topCommenters: TopCommenterRow[]
  totalArticleVotes: number
  totalCommentVotes: number
  totalLeagues: number
  totalGames: number
}

const TOP_LIMIT = 10

async function get_top_articles() {
  const commentCount =
    sql<number>`count(distinct ${commentsTable.id})`.mapWith(
      Number,
    )
  const upvotes =
    sql<number>`count(*) filter (where ${articleVotesTable.value} = 1)`.mapWith(
      Number,
    )
  const downvotes =
    sql<number>`count(*) filter (where ${articleVotesTable.value} = -1)`.mapWith(
      Number,
    )

  const rows = await db
    .select({
      id: articlesTable.id,
      path: articlesTable.path,
      titleEn: articlesTable.titleEn,
      titlePt: articlesTable.titlePt,
      views: articlesTable.views,
      commentCount,
      upvotes,
      downvotes,
    })
    .from(articlesTable)
    .leftJoin(
      commentsTable,
      eq(commentsTable.articleId, articlesTable.id),
    )
    .leftJoin(
      articleVotesTable,
      eq(articleVotesTable.articleId, articlesTable.id),
    )
    .groupBy(articlesTable.id)

  const topByViews = [...rows]
    .sort((a, b) => b.views - a.views)
    .slice(0, TOP_LIMIT)
  const topByComments = [...rows]
    .sort((a, b) => b.commentCount - a.commentCount)
    .slice(0, TOP_LIMIT)

  return { topByViews, topByComments }
}

async function get_top_commenters(): Promise<
  TopCommenterRow[]
> {
  const commentCount =
    sql<number>`count(${commentsTable.id})`.mapWith(Number)

  return db
    .select({
      playerId: players.id,
      name: players.name,
      nick: players.nick,
      commentCount,
    })
    .from(commentsTable)
    .innerJoin(
      players,
      eq(commentsTable.playerId, players.id),
    )
    .groupBy(players.id)
    .orderBy(desc(commentCount))
    .limit(TOP_LIMIT)
}

export async function get_analytics_overview(): Promise<AnalyticsOverview> {
  const now = new Date()
  const sevenDaysAgo = new Date(
    now.getTime() - 7 * 24 * 60 * 60 * 1000,
  )
  const thirtyDaysAgo = new Date(
    now.getTime() - 30 * 24 * 60 * 60 * 1000,
  )

  const [
    { topByViews, topByComments },
    topCommenters,
    [articleStats],
    [playerStats],
    [commentStats],
    [commentStats7],
    [commentStats30],
    [articleVoteStats],
    [commentVoteStats],
    [leagueStats],
    [gameStats],
  ] = await Promise.all([
    get_top_articles(),
    get_top_commenters(),
    db
      .select({
        totalViews:
          sql<number>`coalesce(sum(${articlesTable.views}), 0)`.mapWith(
            Number,
          ),
        published:
          sql<number>`count(*) filter (where ${articlesTable.draft} = false)`.mapWith(
            Number,
          ),
        drafts:
          sql<number>`count(*) filter (where ${articlesTable.draft} = true)`.mapWith(
            Number,
          ),
      })
      .from(articlesTable),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
        moderators:
          sql<number>`count(*) filter (where ${players.moderator} = true)`.mapWith(
            Number,
          ),
      })
      .from(players),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(commentsTable),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(commentsTable)
      .where(gte(commentsTable.createdAt, sevenDaysAgo)),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(commentsTable)
      .where(gte(commentsTable.createdAt, thirtyDaysAgo)),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(articleVotesTable),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(commentVotesTable),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(leaguesTable),
    db
      .select({
        total: sql<number>`count(*)`.mapWith(Number),
      })
      .from(gamesTable),
  ])

  return {
    totalArticleViews: articleStats.totalViews,
    publishedArticleCount: articleStats.published,
    draftArticleCount: articleStats.drafts,
    topArticlesByViews: topByViews,
    topArticlesByComments: topByComments,
    totalPlayers: playerStats.total,
    moderatorCount: playerStats.moderators,
    totalComments: commentStats.total,
    commentsLast7Days: commentStats7.total,
    commentsLast30Days: commentStats30.total,
    topCommenters,
    totalArticleVotes: articleVoteStats.total,
    totalCommentVotes: commentVoteStats.total,
    totalLeagues: leagueStats.total,
    totalGames: gameStats.total,
  }
}
