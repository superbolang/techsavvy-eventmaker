'use client';

import Link from "next/link";
import { DeleteBtn } from "./deleteBtn";
import { ModalForm } from "./modalForm";
import { useRef, useState } from "react";
import { FormEvent } from "./formEvent";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function EventItem({index, eventItem}) {
    const {events} = eventItem;
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter();

    function showEdit() {
        if (!Cookies.get('token') && JSON.parse(localStorage.getItem('userdata'))?.id) {
            return router.push('/dashboard');
        }
        
        setIsEdit(true);
    }

    return (    
        <tr>
            {isEdit ? (
                <><th>{index + 1}</th><td colSpan={7}><FormEvent isEdit={isEdit} eventItem={eventItem} setIsEdit={setIsEdit}/></td></>
            ) : (
            <><th>{index + 1}</th><td>{events.title}</td><td className="text-wrap">{events.description}</td><td>
                <div className="avatar">
                    <div className="w-28 rounded">
                        <img src={events.image} />
                    </div>
                </div>
            </td><td>{events.dateTime}</td><td>{events.author}</td><td>{eventItem.participants.length}</td><td>
                    <div className="space-x-2 flex flex-row">
                        <Link
                            className='btn'
                            href={{
                                pathname: '/dashboard/events/' + events.id
                            }}
                        >
                            Detail
                        </Link>

                        <ModalForm isEdit={isEdit} eventItem={eventItem} />
                        <button className="btn btn-primary" onClick={() => showEdit()}>Edit</button>

                        <DeleteBtn id={events.id} />
                    </div>
                </td></>
        )}
        </tr>
    );
}