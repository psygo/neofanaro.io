type ArticleRubyProps = {
  base: string
  pronunciation: string
}

export function ArticleRuby({
  base,
  pronunciation,
}: ArticleRubyProps) {
  return (
    <ruby>
      {base}
      <rt className="pb-0.75 text-slate-500 select-none">
        {pronunciation}
      </rt>
    </ruby>
  )
}
