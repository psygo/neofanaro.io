import { WithReactChildren } from "@types"

type ArticleTableProps = WithReactChildren & {
  className?: string
}

export function ArticleTable({
  children,
  className = "",
}: ArticleTableProps) {
  return (
    <div className="not-prose mr-4 ml-4 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
      <table
        className={`w-full border-collapse text-center text-sm ${className}`}
      >
        {children}
      </table>
    </div>
  )
}

type ArticleTableHeadProps = WithReactChildren & {
  className?: string
}

export function ArticleTableHead({
  children,
  className = "",
}: ArticleTableHeadProps) {
  return (
    <thead>
      <tr
        className={`divide-x divide-slate-200 bg-slate-100 dark:divide-slate-700 dark:bg-slate-800 ${className}`}
      >
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
      className={`border-b border-slate-200 px-3 py-2 dark:border-slate-700 ${className}`}
    >
      {children}
    </th>
  )
}

type ArticleTableBodyProps = WithReactChildren & {
  className?: string
}

export function ArticleTableBody({
  children,
  className = "",
}: ArticleTableBodyProps) {
  return <tbody className={className}>{children}</tbody>
}

type ArticleTableRowProps = WithReactChildren & {
  className?: string
}

export function ArticleTableRow({
  children,
  className = "",
}: ArticleTableRowProps) {
  return (
    <tr
      className={`divide-x divide-slate-200 odd:bg-white even:bg-slate-50 dark:divide-slate-700 dark:odd:bg-slate-900 dark:even:bg-slate-800 ${className}`}
    >
      {children}
    </tr>
  )
}

type ArticleTableCellProps = WithReactChildren & {
  className?: string
}

export function ArticleTableCell({
  children,
  className = "px-3 py-4",
}: ArticleTableCellProps) {
  return <td className={`${className}`}>{children}</td>
}
