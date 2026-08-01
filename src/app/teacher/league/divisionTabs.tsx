"use client"

type DivisionTabsProps = {
  divisions: { id: number; title: string }[]
  activeDivisionId: number
  onSelect: (divisionId: number) => void
}

export function DivisionTabs({
  divisions,
  activeDivisionId,
  onSelect,
}: DivisionTabsProps) {
  return (
    <div className="flex gap-6 overflow-x-auto border-b border-slate-200">
      {divisions.map((division) => {
        const isActive = division.id === activeDivisionId
        return (
          <button
            key={division.id}
            type="button"
            onClick={() => onSelect(division.id)}
            className={`cursor-pointer border-b-2 px-1 pb-2 text-sm font-semibold whitespace-nowrap transition duration-300 ${
              isActive
                ? "border-slate-900 text-slate-900"
                : "border-transparent text-slate-500 hover:text-slate-700"
            }`}
          >
            {division.title}
          </button>
        )
      })}
    </div>
  )
}
