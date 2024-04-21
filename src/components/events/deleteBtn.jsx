"use client";

import { CheckAuth } from "@/lib/check_auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const DeleteBtn = ({id}) => {
    const router = useRouter();

    async function deleteEvent() {
        CheckAuth(router);

        await fetch("https://eventmakers.devscale.id/events/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  'Bearer ' + Cookies.get('token')
            },
        });
        router.refresh();
    }
    return <button className="btn bg-rose-700" onClick={deleteEvent}>Delete</button>
}
