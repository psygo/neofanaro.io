import crypto from "node:crypto"

const KEY_LENGTH = 64

export function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16).toString("hex")

  return new Promise((resolve, reject) => {
    crypto.scrypt(
      password,
      salt,
      KEY_LENGTH,
      (err, derivedKey) => {
        if (err) reject(err)
        else resolve(`${salt}:${derivedKey.toString("hex")}`)
      },
    )
  })
}

export function verifyPassword(
  password: string,
  storedHash: string,
): Promise<boolean> {
  const [salt, hash] = storedHash.split(":")

  return new Promise((resolve, reject) => {
    crypto.scrypt(
      password,
      salt,
      KEY_LENGTH,
      (err, derivedKey) => {
        if (err) {
          reject(err)
          return
        }
        const hashBuffer = Buffer.from(hash, "hex")
        resolve(
          hashBuffer.length === derivedKey.length &&
            crypto.timingSafeEqual(hashBuffer, derivedKey),
        )
      },
    )
  })
}
