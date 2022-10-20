import { Header as MantineHeader, Burger, Transition, Group, Container } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Links() {

    return (
        <>
            <Link href="/"><p className="p-3">EXPLORAR</p></Link>
            <Link href="/"><p className="p-3">CREAR PAGINA</p></Link>
            <Link href="/login"><p className="p-3">INGRESAR</p></Link>
        </>
    );

}

export function Header() {

    const [open, setOpen] = useState<boolean>(false);
    
    return (
        <MantineHeader height="65" className="sm:flex-row justify-between">
            <Container 
                className="min-h-[65px] px-2 w-full sm:max-w-2xl m-auto flex items-center justify-between"
            >
                <Link href="/">
                    <div className="flex gap-2 items-center">
                        <Image height={35} width={35} src="/icon.png" alt="icon" className="rounded-full"/>
                        <h1 className="text-xl font-semibold">COFFREAK</h1>
                    </div>
                </Link>
                <div className="sm:hidden">
                    <Burger opened={open} onClick={() => setOpen(!open)} size="lg" />
                </div>
                <div className="hidden sm:flex">
                    <Group className="flex justify-end font-semibold">
                        <Links />
                    </Group>
                </div>
            </Container>
            <Transition transition="pop-top-right" mounted={open}>
                {
                    (styles) => (
                        <nav style={styles} className="bg-[#1A1B1E] absolute top-[65px] font-semibold flex flex-col w-full overflow-hidden items-center" onClick={() => setOpen(false)}>
                            <Links/>
                        </nav>
                    )
                }
                
            </Transition>
        </MantineHeader>
    );

}