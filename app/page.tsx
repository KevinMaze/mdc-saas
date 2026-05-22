"use client";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
    return (
        <>
            <section className="w-full h-screen flex items-center justify-center flex-col gap-2">
                <Image
                    width={100}
                    height={100}
                    alt="Logo"
                    src={Logo}
                    className="mb-4 object-contain"
                />
                <h1 className="text-4xl md:text-6xl font-black mb-2 text-center uppercase flex items-center">
                    <Typewriter
                        typeSpeed={50}
                        words={["Bienvenue", "Welcome"]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                    />
                </h1>
            </section>
        </>
    );
}
