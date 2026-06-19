export default function Teacher() {
  return (
    <main className="mx-auto flex max-w-100 flex-col gap-12 px-4 sm:max-w-xl">
      <GoProfPresentationSection />
      <CourseSection />
    </main>
  )
}

function GoProfPresentationSection() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-center text-3xl font-bold">
        Professor de Go
      </h2>
      <p className="text-center">
        Caso você queira ter aulas, contate-me!
      </p>
    </div>
  )
}

function CourseSection() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center text-3xl font-bold">
        Cursos
      </h2>
      <div className="flex flex-col gap-8">
        <Course
          index={1}
          title="As Regras do Go"
          description="As regras. Descomplicadas."
          url="https://www.youtube.com/embed/MMR_3EZTTFw?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
        />
        <Course
          index={2}
          title="Curso de Go para Iniciantes"
          description="Um curso do zero que aborda as regras, fundamentos de abertura, táticas e a história do Go."
          url="https://www.youtube.com/embed/nIs6yKuL8ZE?list=PLMYMhzMuvitQAPXYv--bdqRJIJGwGMdMe"
        />
        <Course
          index={3}
          title="Abertura do Zero | Volume 1"
          description="Um curso do zero que aborda os princípios básicos da abertura do Go, além de movimentos de canto, josekis básicos e algumas das aberturas mais famosas."
          url="https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
        />
        <div className="my-1 border-t border-slate-200" />
      </div>
    </section>
  )
}

//----------------------------------------------------------
// Course

type CourseProps = {
  index: number
  title: string
  description: string
  url: string
}

function Course({
  index,
  title,
  description,
  url,
}: CourseProps) {
  return (
    <div className="flex flex-col gap-6">
      <CourseNumber index={index} />
      <CourseTitleAndDescription
        title={title}
        description={description}
      />
      <CourseVideoProps url={url} title={title} />
    </div>
  )
}

type CourseVideoProps = {
  url: string
  title: string
}

function CourseVideoProps({
  url,
  title,
}: CourseVideoProps) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-slate-200 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.15)]">
      <iframe
        className="h-full w-full"
        src={url}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}

type CourseNumberProps = {
  index: number
}

function CourseNumber({ index }: CourseNumberProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 border-t border-slate-200" />
      <span className="rounded-full bg-white px-4 py-1 text-sm font-semibold text-slate-950 shadow-sm md:text-lg">
        {index}
      </span>
      <div className="flex-1 border-t border-slate-200" />
    </div>
  )
}

type CourseTitleAndDescriptionProps = {
  title: string
  description: string
}

function CourseTitleAndDescription({
  title,
  description,
}: CourseTitleAndDescriptionProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="max-w-3xl text-lg text-slate-600">
        {description}
      </p>
    </div>
  )
}

//----------------------------------------------------------
