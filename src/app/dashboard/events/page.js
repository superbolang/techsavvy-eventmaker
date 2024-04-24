import { EventItem } from "@/components/events/eventItem";
import { ModalAdd } from "@/components/events/modalAdd";

export default async function EventPage() {
    const res = await fetch("https://eventmakers.devscale.id/events/", {
        cache: "no-store"
    });

    const {data} = await res.json();

    return (
        <div className="overflow-x-auto">
            <ModalAdd />

            <table className="table table-zebra">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th>Author</th>
                    <th>Participant</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {data.map(function(eventItem, index){
                        return <EventItem index={index} key={eventItem.events.id} eventItem={eventItem}/>
                    })}
                    
                </tbody>
            </table>
            </div>
    );
  }
  