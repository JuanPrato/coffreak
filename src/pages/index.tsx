import Image from "next/image";
import { TextInput, Button, Title, Text } from "@mantine/core";
import type { NextPage } from "next";
import FAQ from "../components/home/FAQ";

const Home: NextPage = () => {

  return (
    <>
      <main className="container mx-auto flex flex-col gap-10 min-h-screen items-center p-4">
        <section className="w-[90%]">
          <Title order={3} align="center">HACE POSIBLES TUS IDEAS</Title>
          <Text className="mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae inventore doloremque aperiam totam atque. Similique, facilis iure voluptate aspernatur, assumenda maiores commodi.
          </Text>
        </section>
        <section className="w-[95%] flex flex-col gap-4">
          <TextInput placeholder="Tu pagina" className="w-full" size="lg" />
          <Button uppercase style={{ fontWeight: 300 }} size="md" className="w-full">Agregar pagina</Button>
        </section>
        <Image width={275} height={275} src="/icon.png" alt="LOGO" className="rounded-lg"/>
        <FAQ />
      </main>
      <footer>
        VOLVER A ARRIBA
      </footer>
    </>
  );
};

export default Home;