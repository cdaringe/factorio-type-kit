import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <link rel="stylesheet" href="https://unpkg.com/@highlightjs/cdn-assets@10.5.0/styles/monokai.min.css" />
        </body>
      </Html>
    )
  }
}
