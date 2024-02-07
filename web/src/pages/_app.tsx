import Intl from "@/providers/intl";
import { Montserrat } from "next/font/google";
import { useRouter } from "next/router";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <Intl>
        <main className={`${font.className} bg-secondary-black-dark text-white`}>
          <Component {...pageProps} />
          <footer className="absolute bottom-0 w-full">
            <div className="text-center">
              <Link href={router.pathname} locale={router.locale === "es" ? "en" : "es"}>
                {router.locale === "en" ? "Español" : "English"}
              </Link>
            </div>
          </footer>
        </main>
      </Intl>
      <Analytics />
    </>
  );
}
