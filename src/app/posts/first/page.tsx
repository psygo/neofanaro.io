import { ReactChildren } from "../../../types/reactChildren"

import { Main } from "@components/common/main"

export default function FirstPost() {
  return (
    <Main>
      <article className="prose max-w-105">
        <div className="flex flex-col">
          <h1>
            Garlic bread with cheese: What the science tells
            us
          </h1>
          <h6 className="-mt-4 pb-5 text-slate-500">
            March 25th, 2026
          </h6>
        </div>
        <JustifiedParagraph>
          For years parents have espoused the health
          benefits of eating garlic bread with cheese to
          their children, with the food earning such an
          iconic status in our culture that kids will often
          dress up as warm, cheesy loaf for Halloween.
        </JustifiedParagraph>
        <JustifiedParagraph>
          But a recent study shows that the celebrated
          appetizer may be linked to a series of rabies
          cases springing up around the country.
        </JustifiedParagraph>
      </article>
    </Main>
  )
}

function JustifiedParagraph({ children }: ReactChildren) {
  return (
    <p className="text-justify" lang="pt-br">
      {children}
    </p>
  )
}
