import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { SmtpMessage } from "../smtp-message";

export default function Signup({ searchParams }: { searchParams: Message }) {
    if ("message" in searchParams) {
        return (
            <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
                <FormMessage message={searchParams} />
            </div>
        );
    }

    return (
        <>
            <form className="flex flex-col min-w-64 max-w-64 mx-auto">
                <h1 className="text-2xl font-medium">Zarejestruj się</h1>
                <p className="text-sm text text-foreground">
                    Posiadasz juz konto?{" "}
                    <Link className="text-primary font-medium underline" href="/sign-in">
                        Zaloguj
                    </Link>
                </p>
                <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" placeholder="email@example.com" required />
                    <Label htmlFor="password">Hasło</Label>
                    <Input type="password" name="password" placeholder="Twoje hasło" minLength={6} required />
                    <SubmitButton formAction={signUpAction} pendingText="Tworze konto...">
                        Zalóz konto
                    </SubmitButton>
                    <FormMessage message={searchParams} />
                </div>
            </form>
            <SmtpMessage />
        </>
    );
}
