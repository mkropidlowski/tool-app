import { Button } from "./ui/button";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex gap-3 justify-center items-center"></div>
            <p className="text-3xl lg:text-5xl !leading-tight mx-auto max-w-xl text-center">
                Twoja baza narzędziowa, łatwiejsze zarządzanie stanem Twojego magazynu.{" "}
            </p>

            <Button
                size="lg"
                variant={"secondary"}
                className="opacity-75 cursor-pointer bg-slate-500 text-white font-semibold hover:default"
            >
                <Link className="text-xs text-foreground underline" href="/sign-in">
                    Zacznij korzystać
                </Link>
            </Button>
            <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
        </div>
    );
}
