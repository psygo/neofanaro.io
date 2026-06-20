export function Main({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="mx-auto flex max-w-100 flex-col gap-12 px-4 sm:max-w-4xl">
      {children}
    </main>
  )
}
