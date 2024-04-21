export default async function EventDetailPage({params}) {
    const res = await fetch("https://eventmakers.devscale.id/events/" + params.id, {
        cache: "no-cache"
    });

    const {data} = await res.json();   
    
    return (
        <div className="card container w-full bg-base-100 shadow-xl mx-auto">
            <figure className="p-8">
                <img src={data.events.image} alt={data.events.title} className="max-h-[500px] max-w-[500px]"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.events.title}</h2>
                <p>{data.events.dateTime}</p>
                <p>{data.events.description}</p>

                {data.participants.length > 0 ? (
                <div>
                    <p>Participant</p>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                            </tr>
                            </thead>
                            <tbody>
                                {data.participants.map(function(participant, index){
                                    return (
                                        <tr key={participant.id}>
                                            <th>{index + 1}</th>
                                            <td>{participant.name}</td>
                                            <td>{participant.email}</td>
                                            <td>{participant.phoneNumber}</td>
                                        </tr>
                                    )

                                })}
                        
                            </tbody>
                        </table>
                    </div>

                </div>
                ) : ""}

            </div>
        </div>
    );
  }
  