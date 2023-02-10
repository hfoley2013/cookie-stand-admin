import React from 'react';

export default function CookieStandForm(props) {
  
  return(
    <>
      <form onSubmit={props.onSubmit} className='w-full md:w-2/3 p-2 mx-auto my-4 bg-green-400'>
        <h2 className='text-2xl text-center'>Create Cookie Stand</h2>
        <div className="flex justify-around p-1 my-2">
          <label htmlFor='location' className='flex-none text-xs mr-2'>Location</label>
          <input name='location' id='location' type='text' placeholder='Ex: Seattle' className='w-full pl-1 text-sm'/>
        </div>
        <div className='flex justify-between'>
          <div className='bg-green-200 mx-1'>
            <label htmlFor='minCustomers' className='block text-sm text-center'>Min Customers/Hour</label>
            <input name='minCustomers' id='minCustomers' type='number' step='1' placeholder='Ex: 10' className='text-sm text-center' />
          </div>
          <div className='bg-green-200 mx-1'>
            <label htmlFor='maxCustomers' className='block text-sm text-center'>Max Customers/Hour</label>
            <input name='maxCustomers' id='maxCustomers' type='number' step='1' placeholder='Ex: 20' className='text-sm text-center' />
          </div>
          <div className='bg-green-200 mx-1'>
            <label htmlFor='avgSales' className='block text-sm text-center'>Average Cookies/Sale</label>
            <input name='avgSales' id='avgSales' type='number' step='0.1' placeholder='Ex: 2.5' className='text-sm text-center' />
          </div>
          <button type='submit' className='px-10 py-1 bg-green-700 text-gray-50 hover:bg-red-500 mx-1'>Create</button>
        </div>
      </form>
    </>
  );
};
