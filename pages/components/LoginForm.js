import React from 'react';
import {useAuth} from '../../contexts/auth.js';

export default function LoginForm() {

  const {login} = useAuth();

  async function handleSubmit(event) {
      event.preventDefault();
      login(event.target.username.value, event.target.password.value);
  }

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-sm mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <fieldset className='border p-5'>
            <legend className='text-lg font-bold text-center'>Log In</legend>
            <div className='mb-5'>
            <label htmlFor="username" className='block text-gray-700 font-medium mb-2'>Username</label>
            <input name="username" className='w-full border border-gray-400 p-2 rounded-lg' />
            </div>
            <div className='mb-5'>
            <label htmlFor="password" className='block text-gray-700 font-medium mb-2'>Password</label>
            <input type="password" name="password" className='w-full border border-gray-400 p-2 rounded-lg' />
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-600'>Log In</button>
        </fieldset>
    </form>
  );
}
