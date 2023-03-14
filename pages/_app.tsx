import type { AppProps } from 'next/app'
import {ThemeProvider} from 'next-themes'
import '../styles/globals.css'

import {UIProvider} from "../context/ui";
import {EntriesProvider} from "../context/entries";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <EntriesProvider>
          <UIProvider>
              <ThemeProvider enableSystem={true} attribute="class">
                 <Component {...pageProps} />
              </ThemeProvider>
          </UIProvider>
      </EntriesProvider>
  )
}
