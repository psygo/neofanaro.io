import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="my-6 flex flex-col gap-4">
      <PresentationSection />
      <SubpagesSection />
      <iframe
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src="https://aquarifolio.vercel.app"
      ></iframe>
    </main>
  )
}

function PresentationSection() {
  return (
    <section className="flex gap-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">neofanaro.io</h2>
        <p>
          Olá! Sou Philippe Fanaro, um desenvolvedor de
          software e professor de Go. Através deste site,
          procuro compartilhar conteúdo útil nesses dois
          ramos distintos.
        </p>
      </div>
      <Image
        src="/pictures/philippe_playing_go.png"
        alt="Fanaro"
        width={200}
        height={200}
        className="mx-auto mt-4 rounded-full border border-slate-200 shadow-lg"
      />
    </section>
  )
}

function SubpagesSection() {
  return (
    <section className="flex gap-4">
      <div className="shadow-lg0 flex w-100 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <Image
          loading="eager"
          src="/nav/teacher.svg"
          width={100}
          height={100}
          alt="Teacher"
        />
        <h3 className="text-center text-xl font-bold">
          Professor de Go
        </h3>
      </div>
      <div className="shadow-lg0 flex w-100 flex-col items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <Image
          loading="eager"
          src="/nav/tie.svg"
          width={100}
          height={100}
          alt="Software Developer"
        />
        <h3 className="text-center text-xl font-bold">
          Desenvolvedor de Software
        </h3>
      </div>
    </section>
  )
}
