// import React from "react";
// import { hours } from "../api/data";


// const ReportTable = ({ cookieStands }) => {
//   return cookieStands.length > 0 ? (
//     <table className="w-1/2 mx-auto my-4">
//       <thead>
//         <tr>
//           <th className="border border-black">Location</th>
//           {hours.map((hour, idx) => (
//             <th key={idx} className="border border-black">{hour}</th>
//           ))}
//           {/* <th className="border border-black">Min Customers</th>
//           <th className="border border-black">Max Customers</th>
//           <th className="border border-black">Avg Sales</th> */}
//         </tr>
//       </thead>
//       <tbody>
//         {cookieStands.map((cookieStand, index) => (
//           <tr key={index}>
//             <td className='pl-2 border border-black text-center'>{cookieStand.location}</td>
//             {cookieStand.hourlySales.map((sale, idx) => (
//               <td key={idx} className='pl-2 border border-black text-center'>{sale}</td>
//             ))}
//             {/* <td className='pl-2 border border-black text-center'>{cookieStand.minCustomers}</td>
//             <td className='pl-2 border border-black text-center'>{cookieStand.maxCustomers}</td>
//             <td className='pl-2 border border-black text-center'>{cookieStand.avgSales}</td> */}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   ) : 
//   <h2 className='text-3xl text-center'>No Cookie Stands Available</h2>;
// };

// export default ReportTable;


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
