import { Main } from "@components/common/main"

import { SignInForm } from "./signInForm"

export default function SignInPage() {
  return (
    <Main>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <SignInForm />
      </div>
    </Main>
  )
}
