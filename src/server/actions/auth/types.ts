export type AuthErrorCode =
  | "missing_fields"
  | "password_too_short"
  | "email_taken"
  | "invalid_credentials"

export type AuthFormState = {
  errorCode?: AuthErrorCode
}
