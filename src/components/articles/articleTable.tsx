import { WithReactChildren } from "@types"

export function ArticleTable({
  children,
}: WithReactChildren) {
  return (
    <div className="not-prose mr-2 ml-2 overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full border-collapse text-center text-sm">
        {children}
      </table>
    </div>
  )
}

export function ArticleTableHead({
  children,
}: WithReactChildren) {
  return (
    <thead>
      <tr className="divide-x divide-slate-200 bg-slate-100">
        {children}
      </tr>
    </thead>
  )
}

type ArticleTableHeaderCellProps = WithReactChildren & {
  className?: string
}

export function ArticleTableHeaderCell({
  children,
  className = "",
}: ArticleTableHeaderCellProps) {
  return (
    <th
      className={`border-b border-slate-200 px-3 py-2 ${className}`}
    >
      {children}
    </th>
  )
}

export function ArticleTableBody({
  children,
}: WithReactChildren) {
  return <tbody>{children}</tbody>
}

export function ArticleTableRow({
  children,
}: WithReactChildren) {
  return (
    <tr className="divide-x divide-slate-200 odd:bg-white even:bg-slate-50">
      {children}
    </tr>
  )
}

type ArticleTableCellProps = WithReactChildren & {
  className?: string
}

export function ArticleTableCell({
  children,
  className = "",
}: ArticleTableCellProps) {
  return (
    <td className={`px-3 py-2 ${className}`}>{children}</td>
  )
}
