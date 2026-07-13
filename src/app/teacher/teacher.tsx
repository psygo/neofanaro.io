"use client"

import { containerOutline } from "@styles"

import { useLang } from "@hooks"

import {
  FanaroFacebook,
  FanaroInstagram,
  FanaroYouTube,
  FooterLogo,
  GoWithFanaroYouTube,
} from "@components/common/footer"
import { WithReactChildren } from "../../types/utils"

export function GoProfPresentationSection() {
  const lang = useLang()

  return (
    <div className="mx-auto flex max-w-sm flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-3xl font-black">
          {lang === "pt" ? "Professor de Go" : "Go Teacher"}
        </h2>
        <div className="mx-auto flex max-w-sm flex-col gap-2 px-2">
          {lang === "pt" ? (
            <>
              <p className="text-center">
                Olá! Através dos meus livros e conteúdo no
                YouTube, procuro compartilhar o que sei
                deste jogo milenar e de infinita riqueza.
              </p>
              <p className="text-center">
                Caso você queira ter aulas, contate-me!
              </p>
            </>
          ) : (
            <>
              <p className="text-center">
                Hi! I&apos;m a dan player from Brazil and
                through my books and YouTube content, I try
                to share what I know about this ancient game
                of infinite richness.
              </p>

              <p className="text-center">
                If you would like to take lessons, contact
                me to get a free teaching game!
              </p>
            </>
          )}
        </div>
        <div className="mx-auto mt-1 flex gap-2">
          <FanaroInstagram />
          <FooterLogo
            src="/footer/book_2.svg"
            alt="Como Jogar Go - Uma Introdução Concisa"
            href="https://github.com/psygo/traducao_como_jogar_go"
            size={24}
            className="h-6 w-6"
          />
          {lang === "pt" ? (
            <FanaroYouTube />
          ) : (
            <GoWithFanaroYouTube />
          )}
          <FooterLogo
            src="/footer/book_1.svg"
            alt="Técnicas de Go"
            href="https://github.com/psygo/tecnicas_de_go/releases/tag/1.0"
            size={24}
            className="h-6 w-6"
          />
          <FanaroFacebook />
        </div>
      </div>
      <div className="mt-0.5 flex flex-col gap-2 px-2">
        <div className="flex w-full flex-row gap-2">
          <PricePerHourCard />
          <PricePerPackCard />
        </div>
        <div className="flex gap-1 px-3 text-sm text-gray-600">
          <span className="text-base">*</span>
          {lang === "pt" ? (
            <p>
              Para cada novo aluno, e para cada 4 aulas, eu
              também ofereço uma partida gratuita contra
              mim, com comentários breves no final.
            </p>
          ) : (
            <p>
              For every new student, and for every 4
              lessons, I also offer a free teaching game,
              with brief comments at the end.
            </p>
          )}
        </div>
      </div>
      <CourseVideo
        url={
          lang === "pt"
            ? "https://www.youtube.com/embed/7zpef07ei5U?list=PLLWr-AWriURE"
            : "https://www.youtube.com/embed/_gGw1FTUKSU"
        }
        title="Regras do Go"
      />
    </div>
  )
}

type PriceContainerProps = WithReactChildren

function PriceContainer({ children }: PriceContainerProps) {
  return (
    <div
      className={`${containerOutline} flex w-full flex-col gap-0.5 bg-gray-50 shadow-sm`}
    >
      {children}
    </div>
  )
}

function PricePerHourCard() {
  const lang = useLang()

  return (
    <PriceContainer>
      <p className="text-xl font-black">
        {lang === "pt" ? "R$ 75" : "US$ 19"}
      </p>
      <p className="text-gray-700">
        {lang === "pt" ? "por aula*" : "per lesson*"}
      </p>
    </PriceContainer>
  )
}

function PricePerPackCard() {
  const lang = useLang()

  return (
    <PriceContainer>
      <p className="text-xl font-black">
        {lang === "pt" ? "R$ 275" : "US$ 60"}
      </p>
      <p className="text-gray-700">
        {lang === "pt"
          ? "pacote de 4 aulas*"
          : "4-lesson pack*"}
      </p>
    </PriceContainer>
  )
}

export function CourseSection() {
  const lang = useLang()
  return lang === "pt" ? (
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
  ) : (
    <></>
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
      <CourseVideo url={url} title={title} />
    </div>
  )
}

type CourseVideoProps = {
  url: string
  title: string
}

export function CourseVideo({
  url,
  title,
}: CourseVideoProps) {
  return (
    <div className="aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
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
