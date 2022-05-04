export const config = Object.freeze({
  BASE_URL: process.env.BASE_URL ?? "http://localhost:3000",

  /* Auth config */
  AUTH_AUTHORITY: process.env.NEXT_PUBLIC_AUTH_AUTHORITY ?? "",
  AUTH_CLIENT_ID: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID ?? "",
})
