import React from 'react';

export default function CookieStandForm(props) {
  return(
    <>
      <form onSubmit={props.onSubmit} className='w-full md:w-1/2 p-2 mx-auto my-4 bg-green-400'>
        <h2 className='text-3xl text-center'>Create Cookie Stand</h2>
        <div className="flex justify-around p-3 my-4">
          <label htmlFor='location' className='w-full md:w-1/2 pl-1'>Location</label>
          <input name='location' id='location' type='text' placeholder='Ex: Seattle' className='w-full md:w-1/2 pl-1'/>
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor='minCustomers' className='w-full md:w-1/2 pl-1'>Min Customers/Hour</label>
            <input name='minCustomers' id='minCustomers' type='number' step='1'placeholder='Ex: 10' className='w-full md:w-1/2 pl-1'/>
          </div>
          <div>
            <label htmlFor='maxCustomers' className='w-full md:w-1/2 pl-1'>Max Customers/Hour</label>
            <input name='maxCustomers' id='maxCustomers' type='number' step='1'placeholder='Ex: 20' className='w-full md:w-1/2 pl-1'/>
          </div>
          <div>
            <label htmlFor='avgSales' className='w-full md:w-1/2 pl-1'>Average Cookies/Sale</label>
            <input name='avgSales' id='avgSales' type='number' step='0.1' placeholder='Ex: 2.5' className='w-full md:w-1/2 pl-1'></input>
          </div>
          <button type='submit' className='px-10 py-1 bg-green-700 text-gray-50 hover:bg-red-500'>Create</button>
        </div>
      </form>
    </>
  );
};
