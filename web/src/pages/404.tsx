import Link from "next/link";
import Head from "next/head";

import { T, Tx } from "@/providers/traduction";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center p-24">
        <Head>
          <title>{Tx({ t: "site.404.title" })}</title>
        </Head>
        <div className="flex flex-col text-center">
          <div className="flex flex-row m-2">
            <div className="border-white p-6">
              <T t={`site.404.title`} />
            </div>
          </div>
          <div>
            <Link href={"/"} className="border-b border-white text-sm">
              <T t={`site.404.button.title`} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
