import Link from 'next/link';

export default async function Page() {
  const res = await fetch('https://eventmakers.devscale.id/events', {
    cache: 'no-store',
  });
  const { data } = await res.json();
  // console.log(data);

  return (
    <main>
      <div className='text-center my-8 text-5xl font-medium'>ALL EVENTS</div>
      <div className='grid grid-cols-4 gap-3'>
        {data.map((item) => {
          return (
            <Link key={item.events.id} href=''>
              <img src={item.events.image} width='600' height='400' />
              <div>{item.events.title}</div>
              <div>{item.events.dateTime}</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
