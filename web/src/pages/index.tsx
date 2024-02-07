import Link from "next/link";
import Head from "next/head";

import { T, Tx } from "@/providers/traduction";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center p-24">
        <Head>
          <title>{Tx({ t: "home.headers.title" })}</title>
          <meta name="description" content={Tx({ t: "home.headers.meta.description" })} />
          <meta name="keywords" content={Tx({ t: "home.headers.meta.keywords" })} />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content={Tx({ t: "home.headers.title" })} />
          <meta property="og:description" content={Tx({ t: "home.headers.meta.description" })} />
          <meta property="og:site_name" content={Tx({ t: "site.title" })} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={Tx({ t: "home.headers.title" })} />
          <meta name="twitter:description" content={Tx({ t: "home.headers.meta.description" })} />
          <meta name="twitter:site" content={Tx({ t: "site.title" })} />
        </Head>
        <div className="flex flex-col text-center">
          <div className="flex flex-row m-2">
            <div className="p-6">
              <p>
                <T t={`home.job_title.title`} />
              </p>
            </div>
            <div className="border-l border-white p-6">
              <p>Alexandro Marcelo</p>
            </div>
          </div>
          <div className="m-2">
            <div className="p-6">
              <Link href={"mailto:info@amarcelo.dev"} className="rounded-sm border border-white p-4 shadow-md">
                <T t={`home.contact_me.button.title`} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
