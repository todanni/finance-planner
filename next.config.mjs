!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  redirects : async() => {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
};


export default config;