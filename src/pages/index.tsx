import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import CategoryCarousel from "~/Components/CategoryCarousell";
import Hero from "~/Components/Hero";
import Layout from "~/Components/Layout";
import NewReleases from "~/Components/NewReleases";
import NewsLetter from "~/Components/NewsLetter";

import { api } from "~/utils/api";

export default function Home() {
  /* const hello = api.example.hello.useQuery({ text: "from tRPC" }); */

  return (
    <div>
      <Head>
        <title>CHAS CLOTHING</title>
      </Head>
      <Layout>
        <main>
          <section>
            <Hero />
          </section>
          <section>
            <CategoryCarousel />
          </section>
          <section>
            <NewReleases />
          </section>
          <section>
            <NewsLetter />
          </section>
        </main>
      </Layout>
    </div>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
