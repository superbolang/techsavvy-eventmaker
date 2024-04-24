'use client';

import { CheckAuth } from "@/lib/check_auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export function FormEvent({isEdit, eventItem, setIsEdit}) {
    const ref = useRef(null);
    const router = useRouter();

    async function submitEvent(formData){
        CheckAuth(router);

        const body = {
            title: formData.get('title'),
            description: formData.get('description'),
            image: formData.get('image'),
            dateTime: formData.get('dateTime'),
            author: JSON.parse(localStorage.getItem('userdata'))?.id
        }

        const res = await fetch(!isEdit ? "https://eventmakers.devscale.id/events/" : "https://eventmakers.devscale.id/events/" + eventItem?.events.id, {
            method: isEdit ? "PATCH" : "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  'Bearer ' + Cookies.get('token')
            },
            body: JSON.stringify(body)
        });

        res.json();
        ref.current.reset();
        router.refresh();

        if (!isEdit) {
            document.getElementById('modal_event').close();
        }

        if (isEdit) {
            setIsEdit(false)
        }
    }

    return (
        <div className="container mx-auto card">
            <div className="text-bold text-5xl grid justify-center">{isEdit ? "Edit" : "Add"} Event</div>
            <form ref={ref} className="flex flex-col space-y-2 w-[400px] mx-auto mt-8" action={submitEvent}>
                <input 
                    name="title" 
                    type="text" 
                    placeholder="Title" 
                    className="input input-bordered w-full"
                    defaultValue={eventItem?.events.title}
                    required
                />

                <textarea
                    defaultValue={eventItem?.events.description}
                    name="description"
                    className="textarea textarea-bordered min-h-[100px]" 
                    placeholder="Description" required></textarea>

                <input 
                    defaultValue={eventItem?.events.image}
                    name="image" 
                    type="text" 
                    placeholder="Image URL" 
                    className="input input-bordered w-full"
                    required
                />

                <input
                    defaultValue={eventItem?.events.dateTime} 
                    name="dateTime" 
                    type="text" 
                    placeholder="Date" 
                    className="input input-bordered w-full"
                    required
                />  

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}