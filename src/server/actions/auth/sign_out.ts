"use server"

import { redirect } from "next/navigation"

import { destroySession } from "@server/auth/session"

export async function sign_out() {
  await destroySession()
  redirect("/")
}
