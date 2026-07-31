import Link from "next/link"

import { Main } from "@components/common/main"

import { SignUpForm } from "./signUpForm"

export default function SignUpPage() {
  return (
    <Main>
      <h1 className="text-2xl font-bold">Sign up</h1>
      <SignUpForm />
      <p className="text-slate-600">
        Already have an account?{" "}
        <Link href="/sign-in" className="underline">
          Sign in
        </Link>
        .
      </p>
    </Main>
  )
}
