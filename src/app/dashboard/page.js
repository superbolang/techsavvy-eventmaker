'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Page() {
  const [name, setName] = useState('');
  useEffect(() => {
    const userData = localStorage.getItem('userdata');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setName(parsedUser.name);
    }
  }, []);
  return (
    <main>
      <header className='p-6 flex justify-between text-3xl font-medium'>
        <div>
          Dashboard
          <div>
            <Link href='/myevent'>My Event</Link>
          </div>
          <div>
            <Link href='/create'>Create Event</Link>
          </div>
          <div>
            <Link href='/allevent'>All Event</Link>
          </div>
        </div>
        <div>
          {name} <Link href='/'>(logout)</Link>
        </div>
      </header>
    </main>
  );
}
