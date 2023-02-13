import React from 'react';
import useResource, {createResource} from '../../hooks/useResource';

export default function CookieStandForm() {
  const { createResource } = useResource();
  
  function createCookieStandHandler(e) {
    e.preventDefault();
    const newCookieStand = {
      location: e.target.location.value,
      minimum_customers_per_hour: e.target.minCustomers.value,
      maximum_customers_per_hour: e.target.maxCustomers.value,
      average_cookies_per_sale: e.target.avgSales.value,
    };

    createResource(newCookieStand);
  }

  return(
    <>
      <form onSubmit={createCookieStandHandler} className='w-full md:w-2/3 p-2 mx-auto my-4 bg-emerald-300 border-2 border-emerald-600'>
        <div className="flex justify-around items-center p-1 my-2">
          <div className="flex flex-col items-center w-3/5">
            <label htmlFor='location' className='text-xs text-center mb-1'>ADD LOCATION</label>
            <input name='location' id='location' type='text' placeholder='Cookie Stand Location' className='w-full pl-1 text-sm'/>
          </div>
          <button type='submit' className='px-10 py-1 bg-emerald-700 text-gray-50 hover:bg-red-500 mx-1'>Create</button>
        </div>

        <div className='flex justify-between'>
          <div className='mx-1 w-1/3'>
            <label htmlFor='minCustomers' className='block text-sm text-center'>MINIMUM CUSTOMERS PER HOUR</label>
            <input name='minCustomers' id='minCustomers' type='number' step='1' placeholder='0' className='text-sm text-center flex-grow' />
          </div>
          <div className='mx-1 w-1/3'>
            <label htmlFor='maxCustomers' className='block text-sm text-center'>MAXIMUM CUSTOMERS PER HOUR</label>
            <input name='maxCustomers' id='maxCustomers' type='number' step='1' placeholder='0' className='text-sm text-center' />
          </div>
          <div className='mx-1 w-1/3'>
            <label htmlFor='avgSales' className='block text-sm text-center'>AVERAGE COOKIES PER SALE</label>
            <input name='avgSales' id='avgSales' type='number' step='0.1' placeholder='0' className='text-sm text-center' />
          </div>
        </div>
      </form>
    </>
  );
};
