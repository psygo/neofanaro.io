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
  ArticleSectionTitle,
  ArticleBlockQuote,
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
          , recently I was introduced to{" "}
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
          </ArticleLink>
          , does offer a &quot;Performance Report&quot;, but
          it lacks a reference point, using percentages for
          the ratings, which, to me, feel meaningless, a
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
              Report&quot; for the historic first game
              between Shin Jinseo <NoWrap>신진서</NoWrap>
              &nbsp;9p and KataGo, on a 2-stone handicap
            </ArticleLink>
            . The &quot;Student level&quot; slider does
            change the evaluation from &quot;Good move&quot;
            downwards, but not the &quot;AI Move&quot;.
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
            Jinseo 9p is estimated as 11.2d Fox, while
            KataGo receives a 12d rating. Shin Jinseo 9p is
            often officially rated as a Fox 10d, perhaps he
            gets Fox 11d due to the inflation mentioned down
            below.
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
          take into account the difficulty behind each move.
          Zhangqi offers a solution to that problem with the
          &quot;fit&quot; and &quot;difficulty&quot;
          columns, and the variance on the first column,
          denoted by the orange number after &quot;±&quot;.
        </ArticleParagraph>
        <ArticleParagraph>
          It&apos;s unfortunate Zhangqi seems to estimate
          ranks by sections, it isn&apos;t able to give each
          move a rank yet. It would be amazing to see a rank
          graph for each move, much like what we get for
          points and percentages. And there are some
          constraints a game needs to meet in order to get
          rank estimates. For example, each game needs at
          least 100 moves to receive a rank; and the endgame
          demands 100 moves past move 100 for a rating.
        </ArticleParagraph>
        <ArticleParagraph>
          On another note, it&apos;s worth mentioning that
          Zhangqi&apos;s rank estimates are perhaps
          unintentionally inflated. It seems they trained
          their AI to estimate each player&apos;s strength
          from a large database of blitz games. So, if
          you&apos;re playing with 30s or 60s byo-yomi on
          Fox, your moves will be of higher quality than the
          AI&apos;s reference points.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyhow, getting back to the main topic, Zhangqi
          has used its ranking tool to then estimate how
          many players are cheating with AI.{" "}
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
          games from other Fox 9d&apos;s unless they had a
          badge proving they were at some point certified to
          a similar rank in real life.
        </ArticleParagraph>
        <ArticleParagraph>
          What I usually do and recommend, and that&apos;s
          something I was doing even before the AI era
          &mdash; yes, I&apos;m really that old &mdash; is
          to check the current window&apos;s win/loss record
          on my opponent&apos;s card. If there are way too
          many losses, either that player is really that
          strong, or maybe we&apos;ve found ourselves a
          cheater &mdash; do you wanna take a chance?
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
      <ArticleSection>
        <ArticleSectionTitle>
          Going More In Depth On The Statistics
        </ArticleSectionTitle>
        <ArticleBlockQuote>
          The following information is all thanks to
          Alexandre Amaro 8d Fox, who kindly translated the
          Chinese content in the videos, and much more.
        </ArticleBlockQuote>
        <ArticleParagraph>
          Let&apos;s take a look at how exactly Zhangqi
          managed to get to those conclusions and
          statistics.
        </ArticleParagraph>
        <ArticleParagraph>
          For both the 7d and 8d trials, they used 50
          accounts on 20 games each, totalling 1,000 games.
          That generated 2,000 data points because each game
          features 2 players. It isn&apos;t that much data,
          but it&apos;s already something.
        </ArticleParagraph>
        <ArticleParagraph>
          On the 8d trial, they found that 18% of players
          played beyond top pro level (world champion
          actually), and 18% played just like AIs. Playing
          beyond top pro level might mean the cheater is
          just not following <em>all</em> the AI
          recommendations, which would lead the average
          evaluation down a bit.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/zhangqi_8d_pie_chart.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            18% of 8d&apos;s are beyond top pro (world
            champion); and 18% are AIs.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          The strength distribution follows a bell curve
          around 8d but with a sharp spike at 12d, which is
          where current AIs live. Also, a considerable
          number of opponents accumulate past 10d. It&apos;s
          a pity we don&apos;t have this sort of graph for
          the pre-AI era.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/zhangqi_8d_bell_curve.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            A sharp spike on the 8d distribution graph, at
            12d.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Their way of calculating the percentage of
          cheaters doesn&apos;t come from the distribution
          graph, they seem to have done it by labeling a
          percentage of the accounts as cheaters from a
          minimum number of cheated games.
        </ArticleParagraph>
        <ArticleParagraph>
          If you take into account that ranking up on Fox is
          quite demanding on that range &mdash; you need to
          win 15 games in a 20-game window &mdash;, having
          3-4 games out of those 20 be virtually unwinnable
          makes leveling up borderline impossible.
          That&apos;s why you should check your
          opponent&apos;s current window before continuing
          the game past the first 10 moves &mdash; Fox
          annuls games with 10 or fewer moves.
        </ArticleParagraph>
        <ArticleBlockQuote>
          By the way, Fox&apos;s way of ranking up and down
          is very harsh compared to typical Elo rating. In
          normal Elo, a one-rank difference (100 points)
          should mean a 65% win rate for the stronger
          player, not 15/20 or 75%. A 3:4 rate would mean a
          2-stone difference in Elo (200 points).
        </ArticleBlockQuote>
        <ArticleParagraph>
          Here&apos;s the full video for the 8d analysis:
        </ArticleParagraph>
        <ArticleBilibiliIframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=116366451412146&bvid=BV1DzDzBdErB&cid=37324589335&p=1"
          title="Zhangqi's AI rank estimation and cheating detection for 8d's"
        />
        <ArticleParagraph>
          Applying the same methods for 7d&apos;s, they
          found that 22% of those are likely cheaters. And
          the bell curve does again register a considerable
          number of players beyond 9-10d.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/zhangqi_7d_bell_curve.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            Another sharp spike at 12d.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          The reason we also might have perceived strengths
          from 4d to 6d is likely because the account&apos;s
          owner has lent it to a weaker player. Some strong
          players follow the same pattern seen in MMORPGs:
          rank up an account in order to sell it to a weaker
          player. The buyer would then be able to experience
          and train with very strong players, a privilege
          one would typically need to pay for.
        </ArticleParagraph>
        <ArticleBlockQuote>
          Ashe Vazquez 7d EGF wrote an interesting{" "}
          <ArticleLink href="https://www.lesswrong.com/posts/nR3DkyivzF4ve97oM/how-go-players-disempower-themselves-to-ai">
            article on the Less Wrong website
          </ArticleLink>{" "}
          mostly about players cheating in European online
          tournaments.
        </ArticleBlockQuote>
        <ArticleParagraph>
          The video for the 7d&apos;s is the one I shared in
          the previous section:
        </ArticleParagraph>
        <ArticleBilibiliIframe
          src="//player.bilibili.com/player.html?isOutside=true&aid=116474530367145&bvid=BV1iHo6BSESd&cid=37868012822&p=1"
          title="Zhangqi's AI rank estimation and cheating detection for 7d's"
        />
        <ArticleParagraph>
          It&apos;s quite disappointing that Fox
          doesn&apos;t put too much effort into preventing
          or remedying AI cheating. Chess seems to be way
          further forward in AI detection, although they did
          have more than two decades ahead of Go. And Fox is
          a freemium platform, they could at least offer
          their paid members AI detection plus nullification
          of cheaters&apos; games as a service &mdash;
          ideally, of course, that should be done across all
          games &mdash;, since that can be done in an
          automated way. In chess, since so much of the game
          could be memorized, players could argue they can
          play a borderline perfect game, but in Go, playing
          more than 200 moves at AI quality in the 7-8d
          range is astronomically unlikely.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/zhangqi-cheating/zhangqi_top_pro.png"
          height={100}
          width={350}
        >
          <ImageLegend>
            <ArticleLink href="https://www.bilibili.com/en/video/BV1mvAuzcEwV/">
              Top pros are identified as
              &quot;demigods&quot; or AI on Zhangqi 41.2% of
              the time
            </ArticleLink>
            ; compared to 4.3% for regular pros; and 3.5%
            for Chinese 6d&apos;s.
          </ImageLegend>
        </ArticleImageWithLegend>
      </ArticleSection>
    </Article>
  )
}
