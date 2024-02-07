import { Html, Head, Main, NextScript, DocumentProps } from "next/document";

export default function Document({ locale }: DocumentProps) {
  return (
    <Html lang={locale ?? "es"}>
      <Head>
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
