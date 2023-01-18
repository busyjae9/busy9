import "../styles/globals.css"
import "tailwindcss/tailwind.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <link rel="shortcut icon" type="image/png" href="/blogLogo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
