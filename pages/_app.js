import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Studio Christina</title>
        <meta charSet='UTF-8' />
        <meta name='description' content='A showcase of art made by Christina Lee'/>
        <meta name='author' content='Christina Lee' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content='Christina, Lee, Christina Lee, Showcase, Portfolio, Art, Painter, Watercolour' />
        <meta name='og:image' content='https://i.imgur.com/zJhNJ9w.jpg' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
