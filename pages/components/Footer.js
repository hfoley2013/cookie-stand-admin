import React from 'react';

const Footer = ({cookieStands}) => {
  return(
    <footer className="flex bg-green-400 text-black-900 text-lg p-3">{cookieStands ? cookieStands.length : 0} Locations World Wide</footer>
  )
}

export default Footer;
