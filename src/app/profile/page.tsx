import Link from "next/link"

import { getCurrentPlayer } from "@server"

import { Main } from "@components/common/main"

import { DescriptionForm } from "./descriptionForm"
import { SignOutButton } from "./signOutButton"

export default async function ProfilePage() {
  const player = await getCurrentPlayer()

  if (!player) {
    return (
      <Main>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p>
            You need to sign in to view your profile.{" "}
            <Link href="/sign-in" className="underline">
              Sign in
            </Link>
            .
          </p>
        </div>
      </Main>
    )
  }

  return (
    <Main>
      <div className="flex w-70 flex-col items-center gap-8">
        <h1 className="text-center text-2xl font-bold">
          Profile
        </h1>
        <div className="flex w-full flex-col gap-6">
          <div className="w-full">
            <p className="text-lg font-semibold">
              {player.name}
            </p>
            <p className="text-slate-600">@{player.nick}</p>
          </div>
          <ul className="text-slate-700">
            <li>Rating: {player.rating}</li>
            {player.email && <li>Email: {player.email}</li>}
          </ul>
          <DescriptionForm
            description={player.description}
          />
        </div>
        <hr className="border-0.75 w-full border-gray-200" />
        <SignOutButton />
      </div>
    </Main>
  )
}
