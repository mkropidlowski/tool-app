import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
    const {
        data: { user },
    } = await createClient().auth.getUser();

    if (!hasEnvVars) {
        return (
            <>
                <div className="flex gap-4 items-center">
                    <div></div>
                    <div className="flex gap-2">
                        <Button
                            asChild
                            size="sm"
                            variant={"outline"}
                            disabled
                            className="opacity-75 cursor-none pointer-events-none"
                        >
                            <Link href="/sign-in">Zaloguj</Link>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            variant={"default"}
                            disabled
                            className="opacity-75 cursor-none pointer-events-none"
                        >
                            <Link href="/sign-up">Wyloguj</Link>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
    return user ? (
        <div className="flex items-center gap-4">
            Cześć, {user.email}!
            <form action={signOutAction}>
                <Button type="submit" variant={"outline"}>
                    Wyloguj
                </Button>
            </form>
        </div>
    ) : (
        <div className="flex gap-2">
            <Button asChild size="sm" variant={"outline"}>
                <Link href="/sign-in">Zaloguj</Link>
            </Button>
            <Button asChild size="sm" variant={"default"}>
                <Link href="/sign-up">Załóż konto</Link>
            </Button>
        </div>
    );
}
