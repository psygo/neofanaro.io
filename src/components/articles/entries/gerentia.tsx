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
              nuances que temos regularmente com elas.
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
              utilizá-los no dia a dia dos nossos negócios.
            </ArticleParagraph>
            <ArticleParagraph>
              E é nessa intersecção que entra a{" "}
              <ArticleLink href="https://gerent.app">
                GerentIA
              </ArticleLink>
              , uma plataforma que visa fundir e automatizar
              duas faces da atividade empresarial que, no
              passado e ainda atualmente, estariam e estão
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
              Na GerentIA, a IA é capaz de não só
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
                sobre os recursos de reserva em um ambiente
                de <em>coworking</em>.
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
            <ArticleParagraph>
              Como desenvolvedor principal da plataforma,
              estou sempre aberto a sugestões e críticas. Se
              você tiver alguma, é só deixar nos
              comentários! Eu e a equipe GIA agradecemos!
            </ArticleParagraph>
            <ArticleImageWithLegend
              src="/articles/gerentia/gia_logo_256.png"
              height={100}
              width={150}
              className=""
            >
              <ImageLegend>O logo da GerentIA.</ImageLegend>
            </ArticleImageWithLegend>
          </ArticleSection>
        </>
      ) : (
        <ArticleSection>
          <ArticleParagraph>G</ArticleParagraph>
        </ArticleSection>
      )}
    </Article>
  )
}
