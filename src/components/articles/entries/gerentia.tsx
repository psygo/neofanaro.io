"use client"

import { useTheme } from "next-themes"

import { ArticleProps } from "@types"

import { useIsClient, useLang } from "@hooks"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionTitle,
  ArticleUnorderedList,
  ArticleYouTubeIframe,
  ImageLegend,
} from "../articleContent"

export function Gerentia({ article }: ArticleProps) {
  const lang = useLang()
  const { resolvedTheme } = useTheme()
  const mounted = useIsClient()

  const landingPageSrc =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/landing_page_dark.png"
      : "/articles/gerentia/landing_page_light.png"
  const chat1Src =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/chat_1_dark.png"
      : "/articles/gerentia/chat_1_light.png"
  const reservationSrc =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/reservation_dark.png"
      : "/articles/gerentia/reservation_light.png"
  const reservationCalendarSrc =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/reservation_calendar_dark.png"
      : "/articles/gerentia/reservation_calendar_light.png"
  const flowchartSrc =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/flowchart_dark.png"
      : "/articles/gerentia/flowchart_light.png"
  const extensionsSrc =
    mounted && resolvedTheme === "dark"
      ? "/articles/gerentia/extensions_dark.png"
      : "/articles/gerentia/extensions_light.png"

  return (
    <Article article={article}>
      {lang === "pt" ? (
        <>
          <ArticleSection>
            <ArticleImageWithLegend
              src={landingPageSrc}
              height={100}
              width={450}
              className="rounded"
            >
              <ImageLegend>
                A página inicial da{" "}
                <ArticleLink href="https://gerent.app">
                  GerentIA (gerent.app)
                </ArticleLink>
                .
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              Nos últimos anos, duas melhorias às IAs
              fizeram com que essa tecnologia mudasse de
              natureza, ou pelo menos mudasse como
              deveríamos tratá-la:
            </ArticleParagraph>
            <ArticleUnorderedList>
              <li>Naturalidade da Conversa</li>
              <li>Agência</li>
            </ArticleUnorderedList>
            <ArticleParagraph>
              A naturalidade das conversas de IA atuais é
              algo que transparece para qualquer um. Até
              alguns anos atrás, chamaríamos conversas
              pré-programadas em plataformas de suporte como
              algo inteligente, o que parece um tanto cômico
              face às conversas detalhadíssimas e cheias de
              nuances que temos regularmente com elas hoje
              em dia.
            </ArticleParagraph>
            <ArticleParagraph>
              Por si só, essa mudança já foi capaz de gerar
              novas categorias de ferramentas. Porém, um
              assistente que só é capaz de falar é muito
              limitante. Idealmente, gostaríamos que ele
              também agisse no mundo real.
            </ArticleParagraph>
            <ArticleParagraph>
              E foi esse o novo patamar que se fez
              disponível nas evoluções mais recentes. E de
              maneira segura.
            </ArticleParagraph>
            <ArticleYouTubeIframe
              src="https://www.youtube.com/embed/BFLiy258ljg"
              title="GerentIA — Tutorial"
            />

            <ArticleParagraph>
              Com um trabalho certificado por diversos
              órgãos internacionais de segurança, as maiores
              empresas de IA, como a Anthropic e a OpenAI,
              agora oferecem agentes com proteções que nos
              deixam confiantes o suficiente para
              utilizá-los no dia a dia dos nossos negócios,
              com garantias de que dados de clientes ou de
              nossas empresas não vazem para outros agentes
              de IA.
            </ArticleParagraph>
            <ArticleParagraph>
              A partir desses avanços de naturalidade,
              agência e segurança, fez-se possível a criação
              de uma nova ferramenta, a{" "}
              <ArticleLink href="https://gerent.app">
                GerentIA
              </ArticleLink>
              , uma plataforma que visa fundir e automatizar
              duas faces da atividade empresarial que, no
              passado e atualmente, estariam e ainda estão
              dissociadas.
            </ArticleParagraph>
            <ArticleParagraph>
              Lidar com clientes &mdash; algo
              tradicionalmente feito através de sistemas de
              CRM (<em>Customer Relationship Management</em>
              ) &mdash; e administrar os recursos do negócio
              &mdash; geralmente feito por sistemas de ERP (
              <em>Enterprise Resource Planning</em>) &mdash;
              agora passam a se integrar a uma plataforma
              só, com a IA servindo de ponte automatizada
              para ações que somente seriam possíveis por
              humanos no passado.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection>
            <ArticleSectionTitle>
              As Funcionalidades Principais da GerentIA
            </ArticleSectionTitle>
            <ArticleParagraph>
              Na GerentIA, a IA é capaz de não apenas
              inteligente e humanamente conversar com o
              cliente, mas também efetuar as ações
              respectivamente necessárias no banco de dados,
              com aprovação pendente por um usuário humano
              ou não:
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={chat1Src}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                Exemplo de IA conversando com o cliente
                sobre os recursos de reservas, em um
                ambiente de <em>coworking</em>.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleImageWithLegend
              src={reservationSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                A IA já é capaz de fazer um atendimento
                completo, encaminhando formas de pagamento e
                realizando mudanças no banco de dados.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleImageWithLegend
              src={reservationCalendarSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                O agente IA cria automaticamente um evento
                no calendário da GerentIA.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              E nossa plataforma oferece múltiplas maneiras
              de se personalizar a IA. A mais básica seria
              pela extensão &quot;Especialização de
              IA&quot;, mas a que propõe uma estruturação
              visual mais atrativa é a &quot;Fluxograma de
              Atendimento&quot;:
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={flowchartSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                Um exemplo de diagrama de atendimento que a
                IA deverá seguir.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              A GerentIA é uma plataforma que visa atender
              qualquer tipo de empresa, e, para tal, utiliza
              da versatilidade de um sistema de extensões de
              funcionalidades, isto é, o usuário configura
              quais funcionalidades quer adicionar ao seu
              gerenciamento de negócios. A longo prazo,
              pretende-se também expor a capacidade de
              programação de extensões por terceiros.
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={extensionsSrc}
              height={100}
              width={425}
              //   className="rounded"
            >
              <ImageLegend>
                A GerentIA é decomposta em extensões, o que
                oferece versatilidade para configurá-la às
                necessidades específicas de cada negócio.
              </ImageLegend>
            </ArticleImageWithLegend>
          </ArticleSection>
          <ArticleSection>
            <ArticleSectionTitle>
              Um Convite
            </ArticleSectionTitle>
            <ArticleParagraph>
              Há muitas mais funcionalidades disponíveis e
              muitas outras virão! Acesse a GerentIA
              gratuitamente e comece a automatizar o seu
              negócio na nova era de IA!
            </ArticleParagraph>
            <ArticleParagraph>
              Para finalizar, estamos sempre abertos a
              sugestões e críticas. Se você tiver alguma, é
              só deixar nos comentários! A equipe GIA
              agradece!
            </ArticleParagraph>
            <ArticleImageWithLegend
              src="/articles/gerentia/gia_logo_256.png"
              height={100}
              width={150}
              className=""
            >
              {/* <ImageLegend>O logo da GerentIA.</ImageLegend> */}
              <ImageLegend> </ImageLegend>
            </ArticleImageWithLegend>
          </ArticleSection>
        </>
      ) : (
        <>
          <ArticleSection>
            <ArticleImageWithLegend
              src={landingPageSrc}
              height={100}
              width={450}
              className="rounded"
            >
              <ImageLegend>
                <ArticleLink href="https://gerent.app">
                  GerentIA (gerent.app)
                </ArticleLink>
                &apos;s landing page.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              Over the last few years, two improvements to
              AI have changed the nature of that technology,
              or at least changed how we should treat it:
            </ArticleParagraph>
            <ArticleUnorderedList>
              <li>Naturalness of Conversation</li>
              <li>Agency</li>
            </ArticleUnorderedList>
            {/* The zero-width space before the closing quote
            on "intelligent" keeps it hyphenatable — some
            browsers won't auto-hyphenate a word glued
            directly to trailing punctuation. */}
            <ArticleParagraph>
              The naturalness of today&apos;s AI
              conversations is evident to anyone. Up until
              just a few years ago, we would&apos;ve called
              pre-programmed conversations on support
              platforms &quot;intelligent&quot;, which seems
              a bit comical compared to the highly detailed
              and exceedingly nuanced conversations we
              regularly have with them these days.
            </ArticleParagraph>
            <ArticleParagraph>
              On its own, this shift was already able to
              spawn new categories of tools. However, an
              assistant which is only able to chat is quite
              limiting. Ideally, we&apos;d want it to also
              act in the real world.
            </ArticleParagraph>
            <ArticleParagraph>
              And that&apos;s exactly the new paradigm which
              became available in the most recent AI
              iterations. And safely so.
            </ArticleParagraph>
            <ArticleYouTubeIframe
              src="https://www.youtube.com/embed/BFLiy258ljg"
              title="GerentIA — Tutorial"
            />

            <ArticleParagraph>
              Certified by several international security
              institutions, the biggest AI companies, such
              as Anthropic and OpenAI, now offer agents with
              enough guard-rails to grant us confidence to
              use them in our daily business operations,
              with guarantees that neither our
              customers&apos; nor our own companies&apos;
              data will leak to other AI agents.
            </ArticleParagraph>
            <ArticleParagraph>
              From these advances in naturalness, agency,
              and safety, a new tool was made possible,{" "}
              <ArticleLink href="https://gerent.app">
                GerentIA
              </ArticleLink>
              , a platform aiming at merging and automating
              two facets of business activity which, in the
              past and still today, remain dissociated from
              one another.
            </ArticleParagraph>
            <ArticleParagraph>
              Dealing with customers &mdash; traditionally
              done through CRM (
              <em>Customer Relationship Management</em>)
              systems &mdash; and managing business
              resources &mdash; usually done by ERP (
              <em>Enterprise Resource Planning</em>) systems
              &mdash; now integrate a single platform, with
              AI serving as an automated bridge for actions
              which used to be only possible through human
              intervention.
            </ArticleParagraph>
          </ArticleSection>
          <ArticleSection>
            <ArticleSectionTitle>
              GerentIA&apos;s Main Features
            </ArticleSectionTitle>
            <ArticleParagraph>
              On GerentIA, AI is capable not only of
              intelligently and humanly chatting with the
              customer, but also of carrying out the
              respectively necessary actions on the
              database, pending human approval or not:
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={chat1Src}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                An example of AI talking to a customer about
                booking resources in a coworking space.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleImageWithLegend
              src={reservationSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                AI is already capable of handling a full
                interaction, forwarding payment methods and
                making changes to the database.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleImageWithLegend
              src={reservationCalendarSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                The AI agent automatically creates an event
                on GerentIA&apos;s calendar.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              Our platform offers multiple ways to customize
              its AI agent. The most basic would be through
              the &quot;AI Specialization&quot; extension,
              but the more visually appealing interface is
              the &quot;Flowchart&quot; extension:
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={flowchartSrc}
              height={100}
              width={425}
              className="rounded"
            >
              <ImageLegend>
                An example of a flowchart the AI is
                specified to follow.
              </ImageLegend>
            </ArticleImageWithLegend>
            <ArticleParagraph>
              GerentIA is built to be able to manage any
              type of business, and, to that end, it makes
              use of a versatile feature-extension system,
              i.e., the user configures which features they
              would like to add to their business
              management. In the long run, we also intend to
              offer the ability for third parties to develop
              their own extensions.
            </ArticleParagraph>
            <ArticleImageWithLegend
              src={extensionsSrc}
              height={100}
              width={425}
              //   className="rounded"
            >
              <ImageLegend>
                GerentIA is broken down into extensions,
                which offers total flexibility to
                configuring it to each business&apos;
                specific needs.
              </ImageLegend>
            </ArticleImageWithLegend>
          </ArticleSection>
          <ArticleSection>
            <ArticleSectionTitle>
              An Invitation
            </ArticleSectionTitle>
            <ArticleParagraph>
              There are many more features already
              available, and many others are on their way!
              Access GerentIA for free and start automating
              your business in the new AI era!
            </ArticleParagraph>
            <ArticleParagraph>
              To wrap up, we&apos;re always open to
              suggestions and criticism. If you have any,
              just leave them in the comments! The GIA team
              thanks you!
            </ArticleParagraph>
            <ArticleImageWithLegend
              src="/articles/gerentia/gia_logo_256.png"
              height={100}
              width={150}
              className=""
            >
              {/* <ImageLegend>GerentIA&apos;s logo.</ImageLegend> */}
              <ImageLegend> </ImageLegend>
            </ArticleImageWithLegend>
          </ArticleSection>
        </>
      )}
    </Article>
  )
}
