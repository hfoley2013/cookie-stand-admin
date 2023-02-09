import Head from 'next/head'
import { useState } from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CookieStandForm from './components/CookieStandForm.js';
import ReportTable from './components/ReportTable.js';

export default function Home() {
  
  const [cookieStands, setCookieStands] = useState([]);

  function createCookieStandHandler(e) {
    e.preventDefault();
    
    const newCookieStand = {
      location: e.target.location.value,
      minCustomers: e.target.minCustomers.value,
      maxCustomers: e.target.maxCustomers.value,
      avgSales: e.target.avgSales.value,
      hourlySales: [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36] 
    };

    setCookieStands([...cookieStands, newCookieStand]);
    console.log(cookieStands);
  }
  
  
  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header/>
      <main className='font-serif'>
        <CookieStandForm onSubmit={createCookieStandHandler}/>
        <ReportTable cookieStands={cookieStands}/>
        <Footer cookieStands={cookieStands.length}/>
      </main>
    </>
  )
}
