'use client';

import { FormEvent } from "./formEvent";

export function ModalForm({isEdit, eventItem}) {
    return (
        <dialog id={isEdit ? "modal_event_"+eventItem.events.id : "modal_event" } className="modal">
            <div className="modal-box">
                <FormEvent isEdit={isEdit} eventItem={eventItem} />
            </div>
        </dialog>
    );
}