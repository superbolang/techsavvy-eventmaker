'use client';
import { useState } from 'react';
import { useRef } from 'react';

export const Register = () => {
  const formRef = useRef();
  const [message, setMessage] = useState('');

  async function handleRegister(formData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('https://eventmakers.devscale.id/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.status === 201) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
      formRef.current.reset();
    }

    if (res.status === 405 || res.status === 500) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
    }
  }
  return (
    <main className='space-y-6'>
      <section>
        <h1>Sign up</h1>
        <p>Welcome back</p>
      </section>
      <form ref={formRef} className='space-y-2' action={handleRegister}>
        <input name='name' placeholder='name' className='input input-bordered w-full max-w-xs' />
        <input name='email' placeholder='email' className='input input-bordered w-full max-w-xs' />
        <input name='password' type='password' placeholder='password' className='input input-bordered w-full max-w-xs' />
        <button className='btn btn-accent'>Sign Up</button>
      </form>
      {message !== '' ? <div>{message}</div> : null}
    </main>
  );
};
