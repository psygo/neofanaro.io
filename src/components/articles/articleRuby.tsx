type ArticleRubyProps = {
  base: string
  pronunciation: string
}

export function ArticleRuby({
  base,
  pronunciation,
}: ArticleRubyProps) {
  return (
    <ruby className="text-[1rem]">
      {base}
      <rt className="pb-0.75 text-[0.5rem] text-slate-500 dark:text-slate-400">
        {pronunciation}
      </rt>
    </ruby>
  )
}
