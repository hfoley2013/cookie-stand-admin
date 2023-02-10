import React from "react";
import { hours } from "../api/data";

const ReportTable = ({ cookieStands }) => {

  const totalRow = cookieStands.reduce((acc, cookieStand) => {
    return cookieStand.hourlySales.map((sale, i) => acc[i] + sale);
  }, Array(hours.length).fill(0));

  const total = totalRow.reduce((sum, sale) => sum + sale, 0);

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
          const rowTotal = cookieStand.hourlySales.reduce((sum, sale) => sum + sale, 0);
          return (
            <tr key={index}>
              <td className='pl-2 border border-black text-left'>{cookieStand.location}</td>
              {cookieStand.hourlySales.map((sale, i) => (
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
