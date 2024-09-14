import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Notes from "../notes/page";

export default async function Dashboard() {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/sign-in");
    }

    return (
        <div className="flex-1 w-full flex flex-col gap-12">
            <Notes />
        </div>
    );
}
