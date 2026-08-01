"use client"

import { useActionState, useMemo, useState } from "react"

import { update_profile_details } from "@actions"

import { useLang } from "@hooks"
import { countries } from "@utils"

import { CountryFlag } from "@components/common/countryFlag"

const inputClasses =
  "rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-slate-700 focus:outline-2 focus:outline-slate-400"
const labelClasses = "font-semibold text-slate-700"

type ProfileDetailsFormProps = {
  country: string | null
  nick: string
  ogsLink: string | null
}

export function ProfileDetailsForm({
  country,
  nick,
  ogsLink,
}: ProfileDetailsFormProps) {
  const lang = useLang()
  const [state, formAction, isPending] = useActionState(
    update_profile_details,
    {},
  )
  const [selectedCountry, setSelectedCountry] = useState(
    country ?? "",
  )

  const sortedCountries = useMemo(
    () =>
      [...countries].sort((a, b) =>
        lang === "pt"
          ? a.namePt.localeCompare(b.namePt)
          : a.nameEn.localeCompare(b.nameEn),
      ),
    [lang],
  )

  return (
    <form
      action={formAction}
      className="flex w-full flex-col gap-3"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="country" className={labelClasses}>
          {lang === "pt" ? "País" : "Country"}
        </label>
        <div className="flex items-center gap-2">
          <CountryFlag
            countryCode={selectedCountry || null}
            className="h-5 w-7 shrink-0 rounded-sm"
          />
          <select
            id="country"
            name="country"
            value={selectedCountry}
            onChange={(e) =>
              setSelectedCountry(e.target.value)
            }
            className={`min-w-0 flex-1 ${inputClasses}`}
          >
            <option value="">
              {lang === "pt"
                ? "Selecione um país"
                : "Select a country"}
            </option>
            {sortedCountries.map((option) => (
              <option key={option.code} value={option.code}>
                {lang === "pt"
                  ? option.namePt
                  : option.nameEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="nick" className={labelClasses}>
          {lang === "pt" ? "Usuário do OGS" : "OGS Username"}
        </label>
        <input
          id="nick"
          name="nick"
          type="text"
          defaultValue={nick}
          placeholder={
            lang === "pt"
              ? "Seu usuário no OGS"
              : "Your OGS username"
          }
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="ogsLink" className={labelClasses}>
          OGS Link
        </label>
        <input
          id="ogsLink"
          name="ogsLink"
          type="url"
          defaultValue={ogsLink ?? ""}
          placeholder="https://online-go.com/player/..."
          className={inputClasses}
        />
      </div>

      {state.errorCode && (
        <p className="text-sm text-red-600">
          {lang === "pt"
            ? "Você precisa entrar na sua conta."
            : "You need to sign in."}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer self-end rounded-lg bg-slate-100 px-4 py-1 ring-1 ring-slate-200 transition duration-300 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending
          ? lang === "pt"
            ? "Salvando..."
            : "Saving..."
          : lang === "pt"
            ? "Salvar"
            : "Save"}
      </button>
    </form>
  )
}
