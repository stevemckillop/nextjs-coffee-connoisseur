import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/NotoSans-Bold.ttf"
          as='font'
          crossOrigin='anonymous'>
        </link>
        <link
          rel="preload"
          href="/fonts/NotoSans-Regular.ttf"
          as='font'
          crossOrigin='anonymous'>
        </link>
        <link
          rel="preload"
          href="/fonts/NotoSans-SemiBold.ttf"
          as='font'
          crossOrigin='anonymous'>
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
