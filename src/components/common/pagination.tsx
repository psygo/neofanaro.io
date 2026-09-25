type PaginationProps = {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
}: PaginationProps) {
  if (pageCount <= 1) return null

  return (
    <div className="flex items-center gap-3">
      <PaginationButton
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
      >
        <ChevronIcon direction="left" />
      </PaginationButton>
      <span className="text-sm font-semibold text-slate-700 tabular-nums dark:text-slate-300">
        {page} / {pageCount}
      </span>
      <PaginationButton
        disabled={page >= pageCount}
        onClick={() => onPageChange(page + 1)}
      >
        <ChevronIcon direction="right" />
      </PaginationButton>
    </div>
  )
}

function PaginationButton({
  disabled,
  onClick,
  children,
}: {
  disabled: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-gray-50 text-gray-600 transition duration-300 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:disabled:hover:bg-slate-800"
    >
      {children}
    </button>
  )
}

function ChevronIcon({
  direction,
}: {
  direction: "left" | "right"
}) {
  return (
    <svg
      className={`size-4 ${direction === "left" ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}
