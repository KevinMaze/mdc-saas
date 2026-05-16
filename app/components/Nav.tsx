"use client";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import { ModeToggle } from "./ThemeToggle";

export default function Nav() {
    return (
        <nav className="max-w-300 w-full mx-auto h-20 flex items-center justify-between p-5 border-b border-gray-300">
            <div>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo du site MDC SAAS"
                        width={30}
                        height={30}
                        className="w-12 h-12"
                    />
                </Link>
            </div>

            <div className="flex items-center gap-5">
                {" "}
                <ModeToggle />{" "}
            </div>
        </nav>
    );
}

// 27:15
