'use client';

import { ModalForm } from "./modalForm";

export function ModalAdd() {
    return (
        <>
            <button className="btn m-8 btn-primary" onClick={() => document.getElementById('modal_event').showModal()}>Add</button>
            <ModalForm />
        </>
    )
}