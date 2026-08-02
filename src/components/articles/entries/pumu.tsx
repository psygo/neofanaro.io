import { ArticleProps } from "@types"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleImageWithLegend,
  ArticleCode,
  ArticleOrderedList,
  ArticlePre,
  ArticleSectionTitle,
  ArticleUnorderedList,
  ArticleYouTubeIframe,
  ArticleBlockQuote,
} from "@components/articles/article"

export function Pumu({ article: post }: ArticleProps) {
  return (
    <Article article={post}>
      <ArticleSection>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/MSvIstLgX34"
          title="PUMU 璞木, and Customizing Fox and OGS Board and Stones"
        />
        <ArticleBlockQuote>
          <ArticleParagraph>
            PUMU is offering a discount code, check the
            video description for more!
          </ArticleParagraph>
        </ArticleBlockQuote>
        <ArticleParagraph>
          Recently, I was going through{" "}
          <ArticleLink href="https://www.reddit.com/r/baduk/">
            r/baduk on Reddit
          </ArticleLink>{" "}
          when I saw an interesting dark theme for gobans
          which reminded me of my{" "}
          <ArticleLink href="https://github.com/FanaroEngineering/fanaro_sabaki_theme_collection">
            Sabaki Theme Collection
          </ArticleLink>
          , a repo I created in a couple of days many years
          ago for learning how to customize the theming for
          the editor{" "}
          <ArticleLink href="https://sabaki.yichuanshen.de/">
            Sabaki
          </ArticleLink>
          . After posting a comment about what that repo,
          the user behind the Patreon creator{" "}
          <ArticleLink href="https://www.patreon.com/c/GoSkins/home">
            PUMU 璞木
          </ArticleLink>{" "}
          reached out to me to share his work and ask me for
          reccommendations about how to port his themes to
          Sabaki.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/pumu/pumu_patreon.png"
          className="rounded-xl"
          height={100}
          width={425}
        >
          <ArticleParagraph>
            PUMU 璞木 on Patreon
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          I was quite surprised by not only the fact that he
          has a catalog with dozens of themes but that PUMU
          seems to be present on many of the most popular Go
          streams on Twitch.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/pumu/pumu_glass_kiri.png"
          className="rounded-lg"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            PUMU&apos;s &quot;Glass Kiri&quot; theme
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/pumu/pumu_kaya_1.png"
          className="rounded-lg"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            PUMU&apos;s &quot;Kaya 01&quot; theme
          </ArticleParagraph>
        </ArticleImageWithLegend>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Customizing Fox
        </ArticleSectionTitle>
        <ArticleParagraph>
          Before knowing PUMU, I wasn&apos;t aware it was
          possible to customize Fox&apos;s board and stones
          themes. It actually isn&apos;t. Not through its
          interface at least. However, there&apos;s a way to
          hack into it. PUMU shares charts on his Patreon
          page guiding users with the process. On Windows,
          what you need to do is:
        </ArticleParagraph>
        <ArticleOrderedList>
          <li>
            Find where in the{" "}
            <ArticleCode>Program Files (x86)</ArticleCode>
            &nbsp;folder your{" "}
            <ArticleCode>foxwq</ArticleCode>
            &nbsp;is installed;
          </li>
          <li>
            Replace the{" "}
            <ArticleCode>badukpan4.png</ArticleCode>,{" "}
            <ArticleCode>badukpan4old.png</ArticleCode>,{" "}
            <ArticleCode>whiteStone.png</ArticleCode>
            &nbsp;and{" "}
            <ArticleCode>blackStone.png</ArticleCode>
            &nbsp;files in the{" "}
            <ArticleCode>Images</ArticleCode>&nbsp;folder
            with the new image assets &mdash; do make sure
            you don&apos;t lose the original assets, just in
            case.
          </li>
        </ArticleOrderedList>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Customizing Sabaki
        </ArticleSectionTitle>
        <ArticleParagraph>
          If you&apos;re curious about how to package his
          themes for use in Sabaki, I suggest you use{" "}
          <ArticleLink href="https://github.com/FanaroEngineering/fanaro_sabaki_theme_collection/tree/master/Bluish%20Purple%20Squared">
            one of my themes on my Sabaki Theme Collection
          </ArticleLink>{" "}
          as reference. In short, the CSS code is gonna look
          like this:
        </ArticleParagraph>
        <ArticlePre language="css">{sabakiCss}</ArticlePre>
        <ArticleParagraph>
          You will then mostly only need to replace the
          image URLs, and then package everything into an{" "}
          <ArticleCode>.asar</ArticleCode>&nbsp;file.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/pumu/bluish_purple_squared.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            My &quot;Bluish Purple Square&quot; Sabaki theme
            from the code above.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/pumu/fire_and_ice.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            My &quot;Fire and Ice&quot; theme.
          </ArticleParagraph>
        </ArticleImageWithLegend>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          Customizing OGS
        </ArticleSectionTitle>
        <ArticleParagraph>
          OGS is probably the easiest platform to customize.
          Just click on your username on the top-right and
          you will be met with many presets already.
        </ArticleParagraph>
        <ArticleParagraph>
          If you wanna go any further, click on &quot;More
          Options&quot; and you&apos;re gonna have URL links
          available for customizing the board and stones.
          And, just like Sabaki, you can even customize the
          grid&apos;s color.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/pumu/ogs_desert_theme.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            My OGS &quot;Desert&quot; theme.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/pumu/ogs_pistacchio_theme.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <ArticleParagraph>
            My OGS &quot;Pistacchio&quot; theme.
          </ArticleParagraph>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          My two favorite OGS themes in the past 5 years
          have been the &quot;Desert&quot; and the
          &quot;Pistacchio&quot;, which I adapted from these
          two OGS Forum threads:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <li>
            <ArticleLink href="https://forums.online-go.com/t/board-backgrounds-library/29388/90?u=psygo">
              Board Backgrounds
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://forums.online-go.com/t/custom-boards/28358/40">
              Custom Boards
            </ArticleLink>
          </li>
        </ArticleUnorderedList>
      </ArticleSection>
    </Article>
  )
}

const sabakiCss = String.raw`
.shudan-goban {
    --shudan-board-border-width: 0;
    --shudan-board-foreground-color: #222;

    --shudan-black-background-color: #0E0E0E;
    --shudan-black-foreground-color: #eee;

    --shudan-white-background-color: #EBEBEB;
    --shudan-white-foreground-color: #222;
}

.shudan-goban-image {
  background-image: url('img/background.png');
}

.shudan-stone-image.shudan-sign_1 {
    background-image: url('img/blue.png');
}

.shudan-stone-image.shudan-sign_-1 {
    background-image: url('img/purple.png');
}
`
