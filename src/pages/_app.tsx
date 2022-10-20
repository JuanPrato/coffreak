import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Header } from "../components/common/Header";
import Head from "next/head";
import { createEmotionCache, MantineProvider } from "@mantine/core";

const mantineCache = createEmotionCache({ key: "mantine", prepend: false });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Head>
        <title>COFFREAK</title>
        <meta name="description" content="App to post content related with anime, manga, etc." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SessionProvider session={session}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          emotionCache={mantineCache}
          theme={{colorScheme: "dark"}}
        >
          <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
            <Header />
            <Component {...pageProps} />
          </div>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
