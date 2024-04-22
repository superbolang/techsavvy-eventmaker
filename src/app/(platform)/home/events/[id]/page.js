import { SingleEvent } from "@/components/SingleEvent";

export default async function EventDetailPage({ params }) {
  const { id } = params;
  const res = await fetch(`https://eventmakers.devscale.id/events/${id}`, {
    cache: "no-cache",
  });

  const { data } = await res.json();

  return (
    <>
      <SingleEvent events={data} />
    </>
  );
}
