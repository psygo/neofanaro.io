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
  ArticleUnorderedList,
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

  return (
    <Article article={article}>
      {lang === "pt" ? (
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
                GerentIA
              </ArticleLink>
              .
            </ImageLegend>
          </ArticleImageWithLegend>
          <ArticleParagraph>
            Nos últimos anos, duas melhorias às IAs fizeram
            com que essa tecnologia mudasse de natureza, ou
            pelo menos mudasse como deveríamos tratá-la:
          </ArticleParagraph>
          <ArticleUnorderedList>
            <li>Naturalidade da Conversa</li>
            <li>Agência</li>
          </ArticleUnorderedList>
          <ArticleParagraph>
            A naturalidade das conversas de IA atuais é algo
            que transparece para qualquer um. Até alguns
            anos atrás, chamaríamos conversas
            pré-programadas em plataformas de suporte como
            algo inteligente, o que parece cômico face às
            conversas detalhadíssimas e cheias de nuances
            que temos regularmente com elas.
          </ArticleParagraph>
          <ArticleParagraph>
            Por si só, essa mudança já foi capaz de gerar
            novas categorias de ferramentas. Porém, um
            assistente que só é capaz de falar é muito
            limitante. Idealmente, gostaríamos que ele
            também agisse no mundo real.
          </ArticleParagraph>
          <ArticleParagraph>
            E foi esse o novo patamar que se fez disponível
            nas evoluções mais recentes. E de maneira
            segura.
          </ArticleParagraph>
          <ArticleParagraph>
            Com um trabalho certificado por diversos órgãos
            de segurança, as maiores empresas de IA agora
            oferecem agentes com proteções que nos deixam
            confiantes o suficiente para utilizá-los no dia
            a dia de nossos negócios.
          </ArticleParagraph>
          <ArticleParagraph>
            E é nessa intersecção que entra a GerentIA, uma
            plataforma que visa fundir e automatizar duas
            faces da atividade empresarial que, no passado e
            ainda atualmente, estariam e estão dissociadas.
          </ArticleParagraph>
          <ArticleParagraph>
            Lidar com clientes, tradicionalmente feito
            através de sistemas de CRM (
            <em>Customer Relationship Management</em>), e
            administrar os recursos do negócio, geralmente
            feito por sistemas de ERP (
            <em>Enterprise Resource Planning</em>), agora
            passam a se integrar em uma plataforma só, com a
            IA servindo de ponte automatizada para ações
            somente seriam possíveis por humanos no passado.
          </ArticleParagraph>
        </ArticleSection>
      ) : (
        <ArticleSection>
          <ArticleParagraph>G</ArticleParagraph>
        </ArticleSection>
      )}
    </Article>
  )
}
