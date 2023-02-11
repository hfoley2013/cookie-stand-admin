import React from "react";
import { useAuth } from '@/contexts/auth.js';

const Header = () => {
  const { user } = useAuth();
  return (
  <div className=''>
    <header className="flex bg-emerald-400 text-black-900 p-3 text-4xl items-center">
      Cookie Stand Admin
      <div className="flex-grow"></div>
      {user ? <button className='text-sm bg-slate-100 rounded-lg p-1 font-semibold'>{user.username}</button> : null}
    </header>
  </div>
  );
};

export default Header;
