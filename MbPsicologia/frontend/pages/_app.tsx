import type { AppProps } from "next/app"
import { GlobalStyles } from "@/components/styles/global-styles"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
