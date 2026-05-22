import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Buttonprovider() {
    return (
        <div className="flex flex-col space-y-4">
            <Button onClick={() => signIn("github")}>
                Continuer avec Github
            </Button>
            <Button onClick={() => signIn("google")}>
                Continuer avec Google
            </Button>
        </div>
    );
}
