import { Instrument_Sans } from 'next/font/google';
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
      <div className='grid grid-cols-5 gap-y-3 justify-items-center '>
        {data.map((item) => {
          return (
            <Link key={item.events.id} href=''>
              <div className='bg-indigo-400 w-48 h-28 p-2 text-center font-semibold rounded-md border-2 border-indigo-500'>
                <div>{item.events.title}</div>
                <div>{item.events.dateTime}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
