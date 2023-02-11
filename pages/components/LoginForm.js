import React from 'react';
import {useAuth} from '../../contexts/auth.js';

export default function LoginForm() {

  const {login} = useAuth();

  async function handleSubmit(event) {
      event.preventDefault();
      login(event.target.username.value, event.target.password.value);
  }

  return (
      <form onSubmit={handleSubmit}>
          <fieldset autoComplete='off'>
              <legend>Log In</legend>
              <label htmlFor="username">Username</label>
              <input name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button type='submit'>Log In</button>
          </fieldset>
      </form>
  );
}
