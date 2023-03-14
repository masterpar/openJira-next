import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es" className="dark">
      <Head title="openJira"/>
      <body className="bg:white text-slate-900 dark:bg-slate-900 dark:text-slate-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
