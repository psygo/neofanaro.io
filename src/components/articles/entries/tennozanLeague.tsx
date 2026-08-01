"use client"

import { ArticleProps } from "@types"

import { useLang } from "@hooks"

import {
  ArticleParagraph,
  Article,
  ArticleSection,
  ArticleLink,
  ArticleYouTubeIframe,
  ArticleBlockQuote,
  ArticleImageWithLegend,
} from "@components/articles/article"
import { GoDiagram } from "../goDiagram"

export function TennozanLeague({ post }: ArticleProps) {
  const lang = useLang()

  return (
    <Article data={post}>
      {lang === "pt" ? (
        <ArticleSection>
          <ArticleBlockQuote>
            <ArticleLink internal href="/teacher/league">
              Acesse a liga aqui!
            </ArticleLink>
          </ArticleBlockQuote>
          <ArticleImageWithLegend
            src="/articles/tennozan-league/first_participants.png"
            height={350}
            width={350}
            className="rounded-xl"
          >
            <p>Os primeiros participantes da liga.</p>
          </ArticleImageWithLegend>
          <ArticleParagraph>
            Há alguns anos, administrei uma liga online
            chamada{" "}
            <ArticleLink href="https://fanaroengineering.github.io/dogemp_build/">
              DOGemP
            </ArticleLink>{" "}
            ou &quot;Dojo Online de Go em Português&quot;,
            que também contava com revisões de partidas e
            palestras sobre diversos temas &mdash; e que era
            gerenciada através{" "}
            <ArticleLink href="https://docs.google.com/spreadsheets/d/1Nmf-qVtF1t-IQWB7Dul8G3B17y-wuyXiWfwxvFVyAbI/edit?gid=570732630#gid=570732630">
              desta planilha
            </ArticleLink>
            .
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/41MSBjL5qu4"
            title="O Tesuji-Mor"
          />
          <ArticleParagraph>
            As palestras por si só já davam um baita
            trabalho para produzir semanalmente. Mas eu
            também revisava praticamente todas as partidas
            da liga, e transmitia as minhas ao vivo. No
            final das contas, aos poucos, à medida que
            outras coisas na minha vida passaram a exigir
            mais tempo, administrar aquele dojo online foi
            ficando cada vez mais inviável. Na época, eu
            tinha uma mentalidade de tudo ou nada em relação
            à ideia, então optei por encerrá-la.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/IK5dFFTS_M8"
            title="Revisão de Cactus Juice vs Pedepano"
          />
          <ArticleParagraph>
            Agora estou reiniciando-a. Mais ou menos.
          </ArticleParagraph>
          <ArticleParagraph>
            Faremos uma liga semanal com compensação
            (handicap), na qual transmitirei minhas partidas
            ao vivo. Vou tentar fazer com que todos agendem
            suas partidas para as quartas-feiras às 20h
            (GMT-3), assim conseguimos socializar melhor. E,
            já que estarei ao vivo, também poderei comentar
            as partidas de outros jogadores, depois que
            terminar a minha.
          </ArticleParagraph>
          <ArticleParagraph>
            Todos são bem-vindos, você não precisa ser
            brasileiro nem falar português para participar.
            A maioria dos brasileiros sabe pelo menos um
            pouco de inglês, o que ajuda bastante na
            comunicação com estrangeiros.
          </ArticleParagraph>
          <ArticleParagraph>
            <ArticleLink href="https://senseis.xmp.net/?Tennozan">
              Tennozan (天王山)
            </ArticleLink>
            , ou &quot;montanha rei-celestial&quot;, foi a
            colina ou monte que o xogum Toyotomi Hideyoshi
            usou para vencer a batalha decisiva pela
            reunificação do Japão em 1582. Esse termo pode
            ser usado de forma parecida com o meme
            &quot;Anakin, eu tenho a vantagem do terreno
            elevado&quot;, de Star Wars.
          </ArticleParagraph>
          <ArticleImageWithLegend
            src="/articles/tennozan-league/high_ground.jpg"
            height={350}
            width={350}
            className="rounded-xl"
          >
            <p>
              O icônico &quot;Acabou, Anakin, eu tenho a
              vantagem do terreno elevado&quot;, de Obi-Wan.
            </p>
          </ArticleImageWithLegend>
          <GoDiagram
            src="/articles/tennozan-league/1.svg"
            width={400}
            height={400}
            diaNumber={1}
          >
            <p>
              Um exemplo de &quot;tennozan&quot; no Go, na
              Sensei&apos;s Library. Preto 1 controla o
              quadrante superior direito do tabuleiro
              &quot;de cima&quot;, pressionando o oponente
              ao mesmo tempo.
            </p>
          </GoDiagram>
        </ArticleSection>
      ) : (
        <ArticleSection>
          <ArticleBlockQuote>
            <ArticleLink internal href="/teacher/league">
              Access the league here!
            </ArticleLink>
          </ArticleBlockQuote>
          <ArticleImageWithLegend
            src="/articles/tennozan-league/first_participants.png"
            height={350}
            width={350}
            className="rounded-xl"
          >
            <p>The first league participants.</p>
          </ArticleImageWithLegend>

          <ArticleParagraph>
            Some years ago, I managed an online league
            called{" "}
            <ArticleLink href="https://fanaroengineering.github.io/dogemp_build/">
              DOGemP
            </ArticleLink>{" "}
            or &quot;Go Online Dojo in Portuguese&quot;,
            which also featured reviews, and lectures on
            various topics &mdash; and which was managed
            through{" "}
            <ArticleLink href="https://docs.google.com/spreadsheets/d/1Nmf-qVtF1t-IQWB7Dul8G3B17y-wuyXiWfwxvFVyAbI/edit?gid=570732630#gid=570732630">
              this spreadsheet
            </ArticleLink>
            .
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/41MSBjL5qu4"
            title="O Tesuji-Mor"
          />
          <ArticleParagraph>
            The lectures themselves were quite a bit of work
            for me to pump out weekly. But I was also
            reviewing pretty much all of the league games,
            and streaming mine live. All in all, slowly, as
            other things in my life started to demand more
            time, managing that online dojo became more and
            more infeasible. At the time, I was in an
            all-or-nothing mindset around the idea, so I
            chose to terminate it.
          </ArticleParagraph>
          <ArticleYouTubeIframe
            src="https://www.youtube.com/embed/IK5dFFTS_M8"
            title="Revisão de Cactus Juice vs Pedepano"
          />
          <ArticleParagraph>
            Now I&apos;m restarting it. Kinda.
          </ArticleParagraph>
          <ArticleParagraph>
            We&apos;re gonna have a weekly handicap league,
            in which I&apos;ll stream my games. And
            I&apos;ll try to have everyone schedule games
            for Wednesdays 8 pm GMT-3, this way we can
            socialize better. Since I&apos;m gonna be live
            streaming, I can also provide comments on other
            players&apos; games after I finish mine.
          </ArticleParagraph>
          <ArticleParagraph>
            Everyone is welcome, you don&apos;t need to be
            Brazilian or speak Portuguese to join. Most
            Brazilians know at least a bit of English, so
            that helps a lot in communicating with
            foreigners.
          </ArticleParagraph>
          <ArticleParagraph>
            <ArticleLink href="https://senseis.xmp.net/?Tennozan">
              Tennozan (天王山)
            </ArticleLink>
            , or &quot;heaven king mountain&quot; was the
            hill or mountain the shogun Toyotomi Hideyoshi
            used to win the decisive battle for reunifying
            Japan in 1582. That term can be used much like
            the Star Wars&apos; &quot;Anakin, I have the
            high ground&quot; meme.
          </ArticleParagraph>
          <ArticleImageWithLegend
            src="/articles/tennozan-league/high_ground.jpg"
            height={350}
            width={350}
            className="rounded-xl"
          >
            <p>
              Obi-Wan&apos;s iconic &quot;It&apos;s over,
              Anakin, I have the high ground&quot;.
            </p>
          </ArticleImageWithLegend>
          <GoDiagram
            src="/articles/tennozan-league/1.svg"
            width={400}
            height={400}
            diaNumber={1}
          >
            <p>
              An example of a &quot;tennozan&quot; in Go,
              from Sensei&apos;s Library. Black&apos;s 1
              controls the top-right quadrant of the board
              from &quot;above&quot;, pressuring the
              opponent at the same time.
            </p>
          </GoDiagram>
        </ArticleSection>
      )}
    </Article>
  )
}
