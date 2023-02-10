import React from "react";
import { hours } from "../api/data";

const ReportTable = ({ cookieStands, deleteStand }) => {
  const totalRow = cookieStands.reduce((acc, cookieStand) => {
    return cookieStand.hourly_sales.map((sale, i) => acc[i] + sale);
  }, Array(hours.length).fill(0));

  const total = totalRow.reduce((sum, sale) => sum + sale, 0);
  
  function handleDelete(id) {
    deleteStand(id);
  }

  return cookieStands.length > 0 ? (
    <table className="w-2/3 mx-auto my-4 border-collapse">
      <thead>
        <tr>
          <th className="border border-black">Location</th>
          {hours.map((hour, index) => (
            <th key={index} className="border border-black">{hour}</th>
          ))}
          <th className="border border-black">Totals</th>
        </tr>
      </thead>
      <tbody>
        {cookieStands.map((cookieStand, index) => {
          const rowTotal = cookieStand.hourly_sales.reduce((sum, sale) => sum + sale, 0);
          return (
            <tr key={index}>
              <td className='pl-2 border border-black text-left'>{cookieStand.location}
                <button onClick={handleDelete(cookieStand.id)}>
                  {<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-5 mr-2 hover:text-black text-red-600 hover:pt-0 cursor-pointer transition-all duration-200">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>}
                </button>
              </td>
              {cookieStand.hourly_sales.map((sale, i) => (
                <td key={i} className='pl-2 border border-black text-center'>{sale}</td>
              ))}
              <td className='pl-2 border border-black text-center font-bold'>{rowTotal}</td>
            </tr>
          );
        })}
        <tr>
          <td className="pl-2 border border-black text-center font-bold">Totals</td>
          {totalRow.map((sum, i) => (
            <td key={i} className='pl-2 border border-black text-center font-bold'>{sum}</td>
          ))}
          <td className='pl-2 border border-black text-center font-bold'>{total}</td>
        </tr>
      </tbody>
    </table>
  ) :
  <h2 className='text-2xl text-center mx-auto my-4'>No Cookie Stands Available</h2>;
};

export default ReportTable;
