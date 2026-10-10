import { ArticleProps } from "@types"

import { Article } from "@components/articles/article"
import {
  ArticleImageWithLegend,
  ArticleLink,
  ArticleParagraph,
  ArticleSection,
  ArticleUnorderedList,
  ImageLegend,
} from "../articleContent"

export function BestOfFanaroio({ article }: ArticleProps) {
  return (
    <Article article={article}>
      <ArticleSection>
        <ArticleParagraph>
          This website you&apos;re using right now is
          actually my third corner on the web. For a brief
          while I had a WordPress blog, but a little bit
          later, I decided to move to a place where I had
          total control over, without any third-party
          software.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/best-of-fanaroio/fanaroio_github_1.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            The fanaro.io Github repository.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          Slowly, I programmed everything from scratch, with
          only HTML, CSS, JS, and{" "}
          <ArticleLink href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components">
            Web Components
          </ArticleLink>
          . The results were the bare-bones website you see
          on{" "}
          <ArticleLink
            internal
            href="https://psygo.github.io/fanaro.io"
          >
            psygo.github.io/fanaro.io
          </ArticleLink>{" "}
          &mdash; its code can be inspected on{" "}
          <ArticleLink href="https://github.com/psygo/fanaro.io">
            github.com/psygo/fanaro.io
          </ArticleLink>
          . It used to be on fanaro.io, but I stopped paying
          for that domain, and someone bought it to funnel
          the traffic elsewhere.
        </ArticleParagraph>
        <ArticleImageWithLegend
          src="/articles/best-of-fanaroio/fanaroio_1.png"
          height={300}
          width={400}
        >
          <ImageLegend>
            My previous blog, fanaro.io.
          </ImageLegend>
        </ArticleImageWithLegend>
        <ArticleParagraph>
          As a software developer and writer, I do feel a
          lot of cringe about that project. Even though
          I&apos;m nostalgic about 1990s web design, I
          believe the more modern UX you&apos;re using right
          here is much better &mdash; and I have plans of
          turning this website into a 3D experience!{" "}
        </ArticleParagraph>
        <ArticleParagraph>
          Back then, I also thought having no frameworks
          would make my website more long-lasting. However,
          especially in the post-AI era, code is really a
          commodity, just a means, we can rewrite it with
          little cost at any point.
        </ArticleParagraph>
        <ArticleParagraph>
          Anyway, with 140+ articles &mdash; in Portuguese,
          English and French &mdash;, some of the content I
          wrote on that blog is still quite useful and/or
          enjoyable, and I might copy it here someday. But,
          for now, I&apos;ll just list some of the best:
        </ArticleParagraph>
        <ArticleUnorderedList>
          <FanaroioBadukArticles />
          <FanaroioSoftwareArticles />
          <FanaroioOthersArticles />
        </ArticleUnorderedList>
      </ArticleSection>
    </Article>
  )
}

function FanaroioBadukArticles() {
  return (
    <li>
      Go | Baduk | Weiqi:
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/4_color_go/4_color_go.html">
            4-Color Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/nestor_de_la_palissade/nestor_de_la_palissade.html">
            A Lenda de Nestor de la Palissade
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/shan_sa/shan_sa.html">
            A Jogadora de Go, por Shan Sa | Leitura de Livro
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/revisao_amir/revisao_amir.html">
            Amir Fragman 6d EGF Comenta: Amir Fragman 6d
            (BRA) vs Abraham Florencia 5d (MEX) [Pandanet Go
            Latin American Team Championship]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_alexandre_amaro_1/aula_alexandre_amaro_1.html">
            Aula de Go com Alexandre Amaro 5d
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_ariel/aula_ariel.html">
            Aula de Go com Ariel Oliveira 13k
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_beatriz/aula_beatriz.html">
            Aula de Go com Beatriz Bouchiglioni Neves 25k
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_eren/aula_eren.html">
            Aula de Go com Eren Sangueve | Convidado
            Internacional da Angola
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_sato/aula_sato.html">
            Aula de Go com Luís Sato 1k OGS
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_wang/aula_wang.html">
            Aula de Go com Wang S, Feng 5d
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/aula_problemas_meio_de_jogo/aula_problemas_meio_de_jogo.html">
            Aula de Problemas de Meio de Jogo
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/revisao_augusto/revisao_augusto.html">
            Aula pelo Patreon: Philippe Fanaro [1d] vs
            Augusto Cezar [14k]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tygem_2/tygem_2.html">
            Cabeçada | Tygem 2
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/revisao_matayoshi/revisao_matayoshi.html">
            Copa do Brasil 2018 Parte II: Ronaldo Matayoshi
            [Kiin 6d] (+ Errata do Jogo Contra Murao)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/copa_samsung_2017/copa_samsung_2017.html">
            Copa Samsung 2017
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/dogemp/dogemp.html">
            DOGemP &mdash; Dojo Online de Go em Português
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fanaro_sabaki_theme_collection/fanaro_sabaki_theme_collection.html">
            Fanaro&apos;s Sabaki Theme Collection
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/estatisticas_go_br/estatisticas_go_br.html">
            Formulário e Estatísticas sobre o Go Brasileiro
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tsumegos_1/tsumegos_1.html">
            Fundamentos de Go &mdash; Tsumegos Parte I
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tsumegos_2/tsumegos_2.html">
            Fundamentos de Go &mdash; Tsumegos Parte II
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fuseki_basico/fuseki_basico.html">
            Fundamentos de Go: Abertura ou Fuseki (Nível
            Básico)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fuseki_34_1/fuseki_34_1.html">
            Fundamentos de Go: Fusekis com 3-4 Parte I
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fuseki_34_2/fuseki_34_2.html">
            Fundamentos de Go: Fusekis com 3-4 Parte II
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fuseki_44/fuseki_44.html">
            Fundamentos de Go: Fusekis com 4-4
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/outros_fusekis/outros_fusekis.html">
            Fundamentos de Go: Outros Fusekis
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tewari/tewari.html">
            Fundamentos de Tewari
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/4_cores_go/4_cores_go.html">
            Go de 4 Cores
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/go_e_matematica/go_e_matematica.html">
            Go e Matemática
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/contagem_guia_completo/contagem_guia_completo.html">
            Guia Completo de Contagem de Pontos
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/guia_yose/guia_yose.html">
            Guia de Bolso do Yose
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/watch_nhk_cup/watch_nhk_cup.html">
            How to Watch the NHK Cup Live
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/myosu_1/myosu_1.html">
            Meu Artigo para a Revista Myosu
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/mini_jogos_go/mini_jogos_go.html">
            Mini-Jogos de Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/murugandi/murugandi.html">
            Murugandi&apos;s Fighting Spirit Design
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/revisao_no_seongho/revisao_no_seongho.html">
            No Seongho [Tygem 8d] vs Philippe Fanaro [Tygem
            4d]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/mestre_de_go/mestre_de_go.html">
            O Mestre de Go, por Yasunari Kawabata | Leitura
            de Livro
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tesuji_mor/tesuji_mor.html">
            O Tesuji-Mor
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/joseki_debates_sinji/joseki_debates_sinji.html">
            Os Grandes Debates de Josekis, por Honda
            Kunihisa 9p | Aula por Thiago Sinji Ramos
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/pocket_yose/pocket_yose.html">
            Pocket Guide to Yose
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tsumego_pro_20k/tsumego_pro_20k.html">
            Problema Profissional Nível 20k
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/pyrrhic_victories/pyrrhic_victories.html">
            Pyrrhic Victories and Josekis
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/quebra_cabeca_go/quebra_cabeca_go.html">
            Quebra-Cabeça de Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/rbgo/rbgo.html">
            Ranking Brasileiro de Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/recursion_fibonacci_in_go/recursion_fibonacci_in_go.html">
            Recursion: Fibonacci in Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/regras_chinesas/regras_chinesas.html">
            Regras Chinesas
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/say_hello_to_my_ai_friend/say_hello_to_my_ai_friend.html">
            Say Hello to My AI Friend (Diga Olá à Minha
            Amiga IA)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/simao_goncalves_vs_philippe_fanaro/simao_goncalves_vs_philippe_fanaro.html">
            Simão Gonçalves [4-5d EGF] vs Philippe Fanaro
            [2k-2d KGS]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/go_statistics/go_statistics.html">
            Some Interesting Go Statistics
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/standard_go_positions_with_ai/standard_go_positions_with_ai.html">
            Standard Go Positions with AI Evaluations
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/sunjang/sunjang.html">
            Sunjang Baduk
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tetris_go/tetris_go.html">
            Tetris Go &mdash; Simão Gonçalves [4-5d EGF] vs
            Philippe Fanaro [2k-2d KGS]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/canonical_trick_play/canonical_trick_play.html">
            The Canonical Trick Play
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fuseki_encyclopedia/fuseki_encyclopedia.html">
            The Pocket Fuseki Encyclopedia
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/go_etiquette/go_etiquette.html">
            Tips and Advice on Go Etiquette
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/traducao_como_jogar_go/traducao_como_jogar_go.html">
            Tradução de Como Jogar Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/toshiro/toshiro.html">
            Tradução de um Livro Clássico do Go
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/traducao_biba/traducao_biba.html">
            Tradução de um Vídeo da BIBA Baduk
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/novo_site_brnhk/novo_site_brnhk.html">
            Um Novo Site para a Brasil Nihon Kiin
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/sinji_great_joseki_debates/sinji_great_joseki_debates.html">
            Um vídeo antigo sobre o livro Os Grandes Debates
            de Josekis
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/go_stickers/go_stickers.html">
            Whatsapp Go Stickers
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/why_play_go/why_play_go.html">
            Why Play Go: A More Thorough Exploration Than
            Usual
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}

function FanaroioSoftwareArticles() {
  return (
    <li>
      Software
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/dart_katas/dart_katas.html">
            (My) Dart Katas
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/less_code/less_code.html">
            &quot;Less Code&quot; Print Design
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/github_toc_hack/github_toc_hack.html">
            A Github Table of Contents Hack
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/spaghetti_theming/spaghetti_theming.html">
            Avoiding Spaghetti Theming | With an Example in
            Flutter
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/epub_tsumego_template/epub_tsumego_template.html">
            EPUB Tsumego Template
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fic/fic.html">
            FIC: Fast Immutable Collections, for Dart
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/laziness_vs_eagerness_dart/laziness_vs_eagerness_dart.html">
            Laziness vs Eagerness in Dart
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/my_dotfiles/my_dotfiles.html">
            My Dotfiles
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/ogs_kbd_nav/ogs_kbd_nav.html">
            OGS Kbd Nav: Play Go on OGS With Only Your
            Keyboard
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/eratos/eratos.html">
            Python Basics, Eratosthenes and Problem 51
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/scrum_2/scrum_2.html">
            Scrum, by Jeff Sutherland, Part 2: The Most
            Useful Lessons
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/scrum_1/scrum_1.html">
            Scrum, by Jeff Sutherland: The Book EVERYONE
            Should Read (Part 1)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/telecom_nostalgia/telecom_nostalgia.html">
            Telecom Nostalgia and Python Basics
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/kbd_guide/kbd_guide.html">
            The Essential Guide to Keyboards: Mistakes,
            Misconceptions and What Really Matters
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/youtube_kbd_nav/youtube_kbd_nav.html">
            YouTube Kbd Nav: A Browser Extension to Enhance
            YouTube&apos;s UI and Keyboard Shortcuts
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}

function FanaroioOthersArticles() {
  return (
    <li>
      Others
      <ArticleUnorderedList>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/qual_idade_capitao/qual_idade_capitao.html">
            26 Ovelhas e 10 Bodes: Qual a Idade do Capitão?
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/kg_lbs_converter/kg_lbs_converter.html">
            3-Step Easy KG &#8644; LBS Converter
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/insuficiencia_direita/insuficiencia_direita.html">
            A Insuficiência da Direita (e, por consequência,
            da Esquerda?)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/origem_cartoes/origem_cartoes.html">
            A Origem dos Cartões
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/var_polemica/var_polemica.html">
            A Polêmica do VAR
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/electoral_fraud_solution/electoral_fraud_solution.html">
            A Solution to Frauds in Digital (Electoral)
            Voting: Beyond Safety
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/weightlifting_logo/weightlifting_logo.html">
            A Weightlifting Logo
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/trump_40_supporters/trump_40_supporters.html">
            Ali Trump and the 40 Ghost Supporters
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/apocalipse_cast_1/apocalipse_cast_1.html">
            ApocalipseCast #1 &mdash; Browsers
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/casey_at_the_bat/casey_at_the_bat.html">
            Casey at the Bat
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/esquerda_francesa_xix/esquerda_francesa_xix.html">
            CLL&amp;M &mdash; Jean Jaurès, a Esquerda
            Francesa do Final do Século XIX
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/tristan_bernard/tristan_bernard.html">
            Collection Littéraire L&amp;M Parte II &mdash;
            Como entrar para a Academia Francesa
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/cllm_poesia/cllm_poesia.html">
            Collection Littéraire Lagarde &amp; Michard
            Parte I: Poesia
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/macunaima/macunaima.html">
            Comentário de Livro: Macunaíma, o Herói sem
            Nenhum Caráter
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/como_digitar/como_digitar.html">
            Como Digitar Sem Olhar e Mais Rápido em 5
            Minutos!
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/diy_minimalist_portrait/diy_minimalist_portrait.html">
            DIY Minimalist Portrait
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/diy_scan_station/diy_scan_station.html">
            DIY Scan Station
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/etimologia_carro/etimologia_carro.html">
            Etimologia da Palavra &quot;Carro&quot;
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/my_logo/my_logo.html">
            How I created my logo
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/less_pain_office/less_pain_office.html">
            Less Pain: Make Your Office More Comfortable and
            Ergonomic
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/musashi/musashi.html">
            Musashi, Craftsmanship and The Critical Moment
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/amsterdam/amsterdam.html">
            My Brief Trip to Amsterdam: Red Lights, Go and
            Biblical Flirting
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/dad_logo/dad_logo.html">
            My Dad&apos;s Logo
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/anti_bullshit_logo/anti_bullshit_logo.html">
            My First Logo and Its Formula
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/negative_language/negative_language.html">
            Negative Language: WHY you should avoid it
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/monty_hall/monty_hall.html">
            O Problema de Monty Hall
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/on_korea/on_korea.html">
            On Korea: A Brief Summary of My Experience
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/design_aunt/design_aunt.html">
            Print Designs for My Aunt
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/quadra_molhada/quadra_molhada.html">
            Quadra Molhada? Sem problemas.
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/quote_1_parker/quote_1_parker.html">
            Quote #1: Writing is the art of applying the ass
            to the seat
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/quote_2_stalin/quote_2_stalin.html">
            Quote #2: Those who vote decide nothing. Those
            who count the votes decide everything.
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/quote_3_fowler/quote_3_fowler.html">
            Quote #3 - Martin Fowler on Good Code (and
            engineering in general)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/scripted_classes_vs_private_lessons/scripted_classes_vs_private_lessons.html">
            Scripted Classes vs Consulting or Private
            Lessons
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/atp/atp.html">
            The ATP Dataset and The Filthy Rich Tennis
            Players
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/inequality/inequality.html">
            The Insufficiency of the Right (and, therefore,
            of the Left?)
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/left_hand_of_darkness/left_hand_of_darkness.html">
            The Left Hand of Darkness, and SciFi
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/solucao_fraude_votos/solucao_fraude_votos.html">
            Uma Solução para Fraudes e Manipulações em Votos
            Digitais (e também eleitorais): Além da
            Segurança
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/potentiel_erotique/potentiel_erotique.html">
            Une (Très) Brève Critique de Livre: Le Potentiel
            Érotique de Ma Femme [FR + EN + PT]
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/universal_principles_design/universal_principles_design.html">
            Universal Principles of Design: The Mandatory
            Book with the Science behind the Black Magic
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/votos/votos.html">
            Voto Branco, Voto Nulo e a Crise da Democracia
          </ArticleLink>
        </li>
        <li>
          <ArticleLink href="https://psygo.github.io/fanaro.io/articles/fallacy_against_communism/fallacy_against_communism.html">
            Why Your Main Argument Against
            Socialism/Communism Is Wrong (Probably)
          </ArticleLink>
        </li>
      </ArticleUnorderedList>
    </li>
  )
}
