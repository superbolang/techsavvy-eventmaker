'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const Login = () => {
  const router = useRouter();
  const [message, setMessage] = useState('');
  async function handleLogin(formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const res = await fetch('https://eventmakers.devscale.id/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 200) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
      router.push('/dashboard');

      // handle payload & token (cookie) manually
      const { payload, token } = jsonRes;
      localStorage.setItem('userdata', JSON.stringify(payload));
      Cookies.set('token', JSON.stringify(token));
    }

    if (res.status === 401 || res.status === 404) {
      const jsonRes = await res.json();
      setMessage(jsonRes.message);
    }
  }

  return (
    <main className='space-y-6'>
      <section>
        <h1>Login</h1>
        <p>Welcome back</p>
      </section>
      <form className='flex' action={handleLogin}>
        <input name='email' placeholder='email' className='input input-bordered w-full max-w-xs' />
        <input name='password' type='password' placeholder='password' className='input input-bordered w-full max-w-xs' />
        <button className='btn btn-accent'>Sign in</button>
      </form>
      {message !== '' ? <div>{message}</div> : null}
    </main>
  );
};
