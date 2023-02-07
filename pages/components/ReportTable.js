import React from "react";

const ReportTable = ({ cookieStands }) => {
  return (
    <table className="w-1/2 mx-auto my-4">
      <thead>
        <tr>
          <th className="border border-black">Location</th>
          <th className="border border-black">Min Customers</th>
          <th className="border border-black">Max Customers</th>
          <th className="border border-black">Avg Sales</th>
        </tr>
      </thead>
      <tbody>
        {cookieStands.map((cookieStand, index) => (
          <tr key={index}>
            <td className='pl-2 border border-black text-center'>{cookieStand.location}</td>
            <td className='pl-2 border border-black text-center'>{cookieStand.minCustomers}</td>
            <td className='pl-2 border border-black text-center'>{cookieStand.maxCustomers}</td>
            <td className='pl-2 border border-black text-center'>{cookieStand.avgSales}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
