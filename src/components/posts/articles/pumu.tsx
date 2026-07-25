import { BlogPostProps } from "@types"

import {
  PostParagraph,
  Post,
  PostSection,
  PostLink,
  PostImageWithLegend,
  PostCode,
  PostOrderedList,
  PostPre,
  PostSectionTitle,
  PostUnorderedList,
  PostYouTubeIframe,
} from "@components/posts/post"

export function Pumu({ post }: BlogPostProps) {
  return (
    <Post data={post}>
      <PostSection>
        <PostYouTubeIframe
          src="https://www.youtube.com/embed/uj6ZJ9EZ53c"
          title="PUMU 璞木, and Customizing Fox and OGS Board and Stones"
        />
        <PostParagraph>
          Recently, I was going through{" "}
          <PostLink href="https://www.reddit.com/r/baduk/">
            r/baduk on Reddit
          </PostLink>{" "}
          when I saw a quirky dark theme for gobans which
          reminded me of my{" "}
          <PostLink href="https://github.com/FanaroEngineering/fanaro_sabaki_theme_collection">
            Sabaki Theme Collection
          </PostLink>
          , a repo I created in a couple of days many years
          ago for learning how to customize the theming for
          the editor{" "}
          <PostLink href="https://sabaki.yichuanshen.de/">
            Sabaki
          </PostLink>
          . After posting a comment about what that repo,
          the user behind the Patreon creator{" "}
          <PostLink href="https://www.patreon.com/c/GoSkins/home">
            PUMU 璞木
          </PostLink>{" "}
          reached out to me to share his work and ask for
          recommendations about how to port his themes for
          Sabaki.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/pumu/pumu_patreon.png"
          className="rounded-xl"
          height={100}
          width={425}
        >
          <p>PUMU 璞木 on Patreon</p>
        </PostImageWithLegend>
        <PostParagraph>
          I was quite surprised by not only the fact that he
          has a catalog with dozens of themes but that PUMU
          seems to be present on many of the most popular Go
          streams on Twitch.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/pumu/pumu_glass_kiri.png"
          className="rounded-lg"
          height={100}
          width={400}
        >
          <p>PUMU&apos;s &quot;Glass Kiri&quot; theme</p>
        </PostImageWithLegend>
        <PostImageWithLegend
          src="/articles/pumu/pumu_kaya_1.png"
          className="rounded-lg"
          height={100}
          width={400}
        >
          <p>PUMU&apos;s &quot;Kaya 01&quot; theme</p>
        </PostImageWithLegend>
      </PostSection>
      <PostSection>
        <PostSectionTitle>Customizing Fox</PostSectionTitle>
        <PostParagraph>
          Before knowing PUMU, I wasn&apos;t aware it was
          possible to customize Fox&apos;s board and stones
          themes. However, there is a way. There are charts
          on his Patreon page guiding the users, but what
          you need to do is, on Windows:
        </PostParagraph>
        <PostOrderedList>
          <li>
            Find where in the{" "}
            <PostCode>Program Files (x86)</PostCode>
            &nbsp;folder your <PostCode>foxwq</PostCode>
            &nbsp;is installed
          </li>
          <li>
            Replace the <PostCode>badukpan4.png</PostCode>,{" "}
            <PostCode>badukpan4old.png</PostCode>,{" "}
            <PostCode>whiteStone.png</PostCode>&nbsp;and{" "}
            <PostCode>blackStone.png</PostCode>&nbsp;files
            in the <PostCode>Images</PostCode>&nbsp;folder
            with the new image assets &mdash; do make sure
            you don&apos;t lose the original assets, just in
            case.
          </li>
        </PostOrderedList>
      </PostSection>
      <PostSection>
        <PostSectionTitle>
          Customizing Sabaki
        </PostSectionTitle>
        <PostParagraph>
          If you&apos;re curious about how to package his
          themes for use in Sabaki, I suggest you use{" "}
          <PostLink href="https://github.com/FanaroEngineering/fanaro_sabaki_theme_collection/tree/master/Bluish%20Purple%20Squared">
            one of my themes on my Sabaki Theme Collection
          </PostLink>{" "}
          as reference. In short, the CSS code is gonna look
          like this:
        </PostParagraph>
        <PostPre language="css">{sabakiCss}</PostPre>
        <PostParagraph>
          You will then mostly only need to replace the
          image URLs, and then package everything into an{" "}
          <PostCode>.asar</PostCode>&nbsp;file.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/pumu/bluish_purple_squared.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <p>
            My &quot;Bluish Purple Square&quot; Sabaki theme
            from the code above.
          </p>
        </PostImageWithLegend>
        <PostImageWithLegend
          src="/articles/pumu/fire_and_ice.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <p>My &quot;Fire and Ice&quot; theme.</p>
        </PostImageWithLegend>
      </PostSection>
      <PostSection>
        <PostSectionTitle>Customizing OGS</PostSectionTitle>
        <PostParagraph>
          OGS is probably the easiest platform to customize.
          Just click on your username on the top-right and
          you&apos;re gonna have many presets available
          already.
        </PostParagraph>
        <PostParagraph>
          If you wanna go any further, click on &quot;More
          Options&quot; and you&apos;re gonna have URL links
          available for customizing the board and stones.
          And, just like Sabaki, you can even customize the
          grid&apos;s color.
        </PostParagraph>
        <PostImageWithLegend
          src="/articles/pumu/ogs_desert_theme.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <p>My OGS &quot;Desert&quot; theme.</p>
        </PostImageWithLegend>
        <PostImageWithLegend
          src="/articles/pumu/ogs_pistacchio_theme.png"
          className="rounded-xl"
          height={100}
          width={400}
        >
          <p>My OGS &quot;Pistacchio&quot; theme.</p>
        </PostImageWithLegend>
        <PostParagraph>
          My two favorite OGS themes in the past 5 years
          have been the &quot;Desert&quot; and
          &quot;Pistacchio&quot;, which I adapted from these
          two OGS Forum threads:
        </PostParagraph>
        <PostUnorderedList>
          <li>
            <PostLink href="https://forums.online-go.com/t/board-backgrounds-library/29388/90?u=psygo">
              Board Backgrounds
            </PostLink>
          </li>
          <li>
            <PostLink href="https://forums.online-go.com/t/custom-boards/28358/40">
              Custom Boards
            </PostLink>
          </li>
        </PostUnorderedList>
      </PostSection>
    </Post>
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
