import React from 'react';
import {useAuth} from '../../contexts/auth.js';

const Footer = ({cookieStands}) => {
  const { user } = useAuth();

  return(
    <footer className="flex bg-emerald-400 text-black-900 text-lg p-3 justify-center">
      {user ? `${cookieStands ? cookieStands.length : 0} Locations World Wide` : '\u00A9 iFoley \u00B7 2023'}
    </footer>
  )
}

export default Footer;
