import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleParagraph,
  ArticleSection,
  ArticleLink,
  ArticleBlockQuote,
  ArticleSectionTitle,
  ArticleImageWithLegend,
  ImageLegend,
  ArticleYouTubeIframe,
  ArticleOrderedList,
  ArticleTableOfContents,
  NoWrap,
} from "../articleContent"

export function MyFavoriteManga({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleTableOfContents />
      <ArticleSection>
        <ArticleParagraph>
          I&apos;m not a manga (<NoWrap>漫画</NoWrap>) nor
          manhwa (<NoWrap>만화</NoWrap>) expert. If
          you&apos;re looking for one, I would highly
          recommend{" "}
          <ArticleLink href="https://www.youtube.com/@mattwith4ts">
            matttt
          </ArticleLink>
          &apos;s channels, which cover all graphic media
          types in fact. Through this article, I merely
          intend to share my favorite picks, the ones which
          impacted me the most, be it for entertainment or
          quality.
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/kCus8vFbwGw"
          title="matttt - The greatest manga artist you've never heard of"
        />
        <ArticleBlockQuote>
          I track my reading on Goodreads,{" "}
          <ArticleLink href="https://www.goodreads.com/user/show/45378010-philippe-fanaro">
            here&apos;s my profile
          </ArticleLink>
          .
        </ArticleBlockQuote>
        <ArticleParagraph>
          If you have any suggestions of manga or manhwa I
          should read, leave them in the comments down
          below!
        </ArticleParagraph>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          My Favorite Manga
        </ArticleSectionTitle>
        <ArticleParagraph>
          The ordering on my list is way less relevant than
          making it to the list, but surely the number one
          pick on my list has got to be{" "}
          <ArticleLink href="https://www.goodreads.com/book/show/32321.Blame_Vol_1">
            Blame!
          </ArticleLink>
          , by Tsutomu Nihei.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/blame_cover.jpg"
          height={100}
          width={400}
        >
          <ImageLegend>
            The cover for the first volume of Blame!
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Blame! is much more of an aesthetic experience
          than a real story. The setting feels sort of
          boilerplate dystopian, but Tsutomu weaves a world
          which feels infinite, awing the reader on every
          page.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/blame_4.jpeg"
          height={100}
          width={400}
        >
          <ImageLegend>
            The infinite patterns in the world of Blame!
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/blame_1.jpg"
          height={100}
          width={400}
        >
          <ImageLegend>
            A page from the manga Blame! (1)
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/blame_2.jpeg"
          height={100}
          width={400}
        >
          <ImageLegend>
            A page from the manga Blame! (2)
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/blame_3.webp"
          height={100}
          width={400}
        >
          <ImageLegend>
            A panel from the manga Blame! (3)
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          I don&apos;t remember where I first heard of this
          manga, but I think it was during an{" "}
          <ArticleLink href="https://youtu.be/Zm5Ogh_c0Ig">
            amazing video on Piranesi (the book), by Jacob
            Geller
          </ArticleLink>
          . Besides lending his name to the title of the
          highly rated and recommended eponymous novel by
          Susanna Clarke (
          <ArticleLink href="https://www.goodreads.com/book/show/50202953-piranesi?ac=1&from_search=true&qid=igWWKez2kr&rank=1">
            Piranesi
          </ArticleLink>
          ), Giovanni Piranesi (1720 - 1778) was also a
          great source of inspiration for M.C. Escher&apos;s
          surreal artwork. Piranesi&apos;s drawings are just
          jaw-dropping.
        </ArticleParagraph>
        <ArticleYouTubeIframe
          src="https://www.youtube.com/embed/Zm5Ogh_c0Ig"
          title="Jacob Geller - The Shape of Infinity"
        />
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/piranesi_1.png"
          height={100}
          width={600}
        >
          <ImageLegend>
            Giovanni Battista Piranesi, <em>Appian Way</em>,
            in La antichità romane, 1756.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/piranesi_2_downscaled.webp"
          height={100}
          width={600}
        >
          <ImageLegend>
            Giovanni Battista Piranesi,{" "}
            <em>Interior Views of Rome</em>, 1758.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/piranesi_3.webp"
          height={100}
          width={600}
        >
          <ImageLegend>
            Giovanni Battista Piranesi, <em>Carcere XIV</em>
            , in Carceri d&apos;Invenzione, etching, 1760,
            Warsaw University Library, Warsaw, Poland.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Anyway, let&apos;s get back to the list. Again,
          this is my personal ranking, not at all how I
          would rank them in an absolute sense. Here they
          are:
        </ArticleParagraph>
        <ArticleOrderedList>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/32321.Blame_Vol_1">
              Blame!
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/13154150-attack-on-titan-vol-1">
              Attack on Titan
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/13590.Hikaru_no_Go_Vol_1">
              Hikaru no Go
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/969275.Dragon_Ball_Vol_1">
              Dragon Ball
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/18753983">
              Dragon Ball Z
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/13615.Death_Note_Vol_1">
              Death Note
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/25783832-one-punch-man-vol-1">
              One Punch Man
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/248871.Berserk_Vol_1">
              Berserk
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/251912.Vagabond_Volume_1">
              Vagabond
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/93371.Akira_Vol_1">
              Akira
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/6759156-dorohedoro-vol-1?ac=1&from_search=true&qid=to0XvXnyva&rank=1">
              Dorohedoro
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/63253340-go-go-loser-ranger-vol-1">
              Go! Go! Loser Ranger
            </ArticleLink>
          </li>
        </ArticleOrderedList>
        <ArticleBlockQuote>
          Did you know that Dragon Ball is heavily inspired
          by one of the founding stories of Chinese
          mythology? Goku is basically Sun Wukong{" "}
          <NoWrap>孫悟空</NoWrap>, the monkey king, from{" "}
          <em>Journey to the West</em>.
        </ArticleBlockQuote>
      </ArticleSection>
      <ArticleSection>
        <ArticleSectionTitle>
          My Favorite Manhwa
        </ArticleSectionTitle>
        <ArticleParagraph>
          Manhwa is the Korean version of manga. Of course,
          there are way fewer of these than there are manga,
          and I know even less about them than I do about
          manga, but I can mention at least two outstanding
          ones:
        </ArticleParagraph>
        <ArticleOrderedList>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/52758079-the-kingdom-of-the-gods">
              The Kingdom of the Gods
            </ArticleLink>
          </li>
          <li>
            <ArticleLink href="https://www.goodreads.com/book/show/36900607-hellper">
              Hellper
            </ArticleLink>
          </li>
        </ArticleOrderedList>
        <ArticleParagraph>
          <em>The Kingdom of the Gods</em> served as the
          inspiration for the highly rated and entertaining
          Netflix series{" "}
          <ArticleLink href="https://www.imdb.com/title/tt6611916/?ref_=nv_sr_srsg_dm_3_tt_8_nm_0_in_0_q_kingdom">
            Kingdom
          </ArticleLink>
          .
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/my-favorite-manga/kingdom_1.jpg"
          height={100}
          width={300}
        >
          <ImageLegend>
            The poster for Netflix&apos;s <em>Kingdom</em>.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Manhwa seem to be even more focused on being
          page-turners than manga, and <em>Hellper</em>{" "}
          certainly toes that line. In Korea, you very often
          see people scrolling frantically through manhwa on
          public transport; it&apos;s almost scary how fast
          they can read them.
        </ArticleParagraph>
        <ArticleParagraph>
          If you&apos;re a Go player, you&apos;ve probably
          heard of{" "}
          <ArticleLink href="https://www.goodreads.com/book/show/24293539">
            Misaeng
          </ArticleLink>
          , since it also received a Netflix adaptation.
          Personally, I found the adaptation unbearably
          cheesy and unwatchable. The original manhwa is
          still out of reach for non-Korean speakers, but I
          managed to take a look at it when I was in Korea,
          and it seemed much more entertaining. It&apos;s a
          pity it might still take a while for non-Korean
          speakers to be able to enjoy it, maybe AI
          translation could speed that up.
        </ArticleParagraph>
      </ArticleSection>
    </Article>
  )
}
