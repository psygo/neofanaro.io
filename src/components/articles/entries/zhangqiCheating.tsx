import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ImageLegend,
  ArticleUnorderedList,
  ArticleBilibiliIframe,
  NoWrap,
  ArticleYouTubeIframe,
} from "../articleContent"

export function ZhangqiCheating({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          Once again thanks to Alexandre Amaro 8d{" "}
          <ArticleLink href="https://www.foxwq.com/">
            Fox
          </ArticleLink>
          , recently I&apos;ve come to know{" "}
          <ArticleLink href="https://zhangqi.com.cn/">
            Zhangqi
          </ArticleLink>
          , yet another Go platform for AI analysis, similar
          to{" "}
          <ArticleLink href="https://19x19.com/">
            Golaxy
          </ArticleLink>{" "}
          or{" "}
          <ArticleLink href="https://ai-sensei.com/">
            AI Sensei
          </ArticleLink>
          . But Zhangqi offers a feature which truly sets it
          apart: it can estimate your rank from the quality
          of your moves. AI Sensei, much like{" "}
          <ArticleLink href="https://github.com/sanderland/katrain">
            KaTrain
          </ArticleLink>{" "}
          does offer a &quot;Performance Report&quot;, but
          it lacks a reference point, using percentages for
          the ratings, which, to me, feel meaningless, and a
          type of number that doesn&apos;t feel actionable
          at all.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/ai_sensei_performance_report.png"
          height={100}
          width={550}
        >
          <ImageLegend>
            <ArticleLink href="https://ai-sensei.com/game/wCbiGfZSh7TjX5eXM8TDgvMzi5u2/HMYKPoPsZ4Y4Fbu1BC62">
              AI Sensei&apos;s &quot;Performance
              Report&quot; for the historic first game of
              Shin Jinseo <NoWrap>신진서</NoWrap>&nbsp;9p vs
              KataGo on a 2-stone handicap
            </ArticleLink>
            . The &quot;Student level&quot; slider does
            change the evaluation from &quot;Good move&quot;
            downwards, but not the &quot;AI move&quot;.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/zhangqi_performance_report.png"
          height={100}
          width={550}
        >
          <ImageLegend>
            <ArticleLink href="https://zhangqi.com.cn/aiAnalysis?sgf=f5e85f00a370484489bc93e2db2d3769&userFile=2427887&auto=1792698302347">
              The same historic match on Zhangqi&apos;s
              report this time
            </ArticleLink>
            , with an auto-translation from Chinese. Shin
            Jinseo 9p is rated as 11.2d on Fox, while KataGo
            receives a 12d rating. Shin Jinseo 9p is often
            rated as a Fox 10d, perhaps he gets Fox 11d due
            to the inflation mentioned down below.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/YxrgSJbYISY"
          title="Jacob Geller - The Shape of Infinity"
        />
        <ArticleParagraph>
          And that&apos;s not even mentioning that the more
          fighting a game has, the more likely humans will
          make egregious mistakes, which would sink the
          percentages down by a lot. So players who fight a
          lot tend to take lower percentages, without that
          meaning much since those percentages didn&apos;t
          take into account the difficulty of each move.
          Zhangqi offers a solution to that problem by
          offering the &quot;fit&quot; and
          &quot;difficulty&quot; columns, and the variance
          on the first column, denoted by the orange number
          after &quot;±&quot;.
        </ArticleParagraph>
        <ArticleParagraph>
          It&apos;s unfortunate Zhangqi seems to estimate
          ranks by sections, that is, it isn&apos;t able to
          give each move a rank yet. It would be amazing to
          see a rank graph for each move, much like what we
          get for points and percentages. And there are some
          constraints the game needs to meet in order to get
          rank estimates. For example, the game needs at
          least 100 moves to receive a rank; and the endgame
          demands 100 moves past move 100 for a rating.
        </ArticleParagraph>
        <ArticleParagraph>
          It&apos;s worth noting that Zhangqi&apos;s rank
          estimates are perhaps unintentionally inflated. It
          seems they trained their AI to estimate each
          player&apos;s strength from a large database of
          blitz games. So, if you&apos;re playing with 30s
          or 60s byo-yomi on Fox, your moves will be of
          higher quality than the AI&apos;s reference
          points.
        </ArticleParagraph>
        <ArticleParagraph>
          Zhangqi has used its ranking tool to then estimate
          how many players are cheating with AI, which
          finally gets us to the claims on this
          article&apos;s title.{" "}
          <ArticleLink href="https://www.bilibili.com/en/video/BV1iHo6BSESd/">
            According to their research
          </ArticleLink>
          , it seems like these are the percentages for AI
          cheaters:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>36% of Fox 8d&apos;s</li>
          <li>22% of Fox 7d&apos;s</li>
        </ArticleUnorderedList>
        <ArticleParagraph>
          So maybe around 1 in 3 Fox 8d&apos;s are cheaters,
          while 1 in 5 for Fox 7d&apos;s.
        </ArticleParagraph>
        <ArticleBilibiliIframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=116474530367145&bvid=BV1iHo6BSESd&cid=37868012822&p=1"
          title="Zhangqi's AI rank estimation and cheating detection"
        />
        <ArticleParagraph>
          And who knows about Fox 9d... During my stay in
          Korea, most Fox 9d&apos;s didn&apos;t even accept
          games from other Fox 9&apos;s, unless they had a
          badge proving they were at some point certified to
          a similar rank in real life.
        </ArticleParagraph>
        <ArticleParagraph>
          What I usually do, and that&apos;s something I was
          doing even before the AI era &mdash; yes, I&apos;m
          really that old &mdash; is to check the current
          window&apos;s win/loss record on my
          opponent&apos;s card. If there are way too many
          losses, either that player is really strong, or
          maybe we found ourselves a cheater &mdash; do you
          wanna take a chance?
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/shin_jinseo_fox.jpeg"
          height={100}
          width={350}
        >
          <ImageLegend>
            Shin Jinseo 9p&apos;s Fox card.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/shin_jinseo_badge.jpeg"
          height={100}
          width={250}
        >
          <ImageLegend>
            Shin Jinseo 9p&apos;s badge.
          </ImageLegend>
        </ArticleImageWithLegend>
      </ArticleSection>
    </Article>
  )
}
