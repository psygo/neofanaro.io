import Link from "next/link"

import { Main } from "@components/common/main"

import { SignInForm } from "./signInForm"

export default function SignInPage() {
  return (
    <Main>
      <h1 className="text-2xl font-bold">Sign in</h1>
      <SignInForm />
      <p className="text-slate-600">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="underline">
          Sign up
        </Link>
        .
      </p>
    </Main>
  )
}
