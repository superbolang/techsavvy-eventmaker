import Link from 'next/link';
import Image from 'next/image';

export default async function Page() {
  const res = await fetch('https://eventmakers.devscale.id/events', {
    cache: 'no-store',
  });
  const { data } = await res.json();
  console.log(data);

  return (
    <main className='flex'>
      <section className='flex-none w-40 text-3xl font-medium'>
        <div>
          <Link href='/login'>Login</Link>
        </div>
        <div>
          <Link href='/register'>Register</Link>
        </div>
      </section>
      <section className='grow'>
        <div className='text-center my-8 text-5xl font-medium mx-3'>ALL EVENTS</div>
        <div className='grid grid-cols-4 gap-3'>
          {data.map((item) => {
            return (
              <div key={item.events.id}>
                <img src={item.events.image} width='600' height='400' />
                <div>{item.events.title}</div>
                <div>{item.events.dateTime}</div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
