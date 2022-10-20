import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { Header } from "../components/common/Header";
import Head from "next/head";
import { Button, createEmotionCache, MantineProvider } from "@mantine/core";
import { useRef } from "react";

const mantineCache = createEmotionCache({ key: "mantine", prepend: false });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

  const ref = useRef<HTMLDivElement>(null);

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
          <div className="w-screen h-screen overflow-y-auto overflow-x-hidden scroll-smooth" ref={ref}>
            <Header />
            <Component {...pageProps} />
            <footer className="text-center p-3">
              <Button onClick={() => ref.current?.scrollTo({ top: 0 })}>
                VOLVER A ARRIBA
              </Button>
            </footer>
          </div>
        </MantineProvider>
      </SessionProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
