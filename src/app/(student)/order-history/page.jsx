"use client";
import React from "react";

const StudentOrderHistoryPage = () => {
  const orderData = [
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
    { id: '#6656', course: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'completed' },
    { id: '#2045', course: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'cancelled' },
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
    { id: '#6656', course: 'Graphic', date: 'March 27, 2022', price: '$200.99', status: 'completed' },
    { id: '#2045', course: 'Application', date: 'March 27, 2022', price: '$200.99', status: 'cancelled' },
    { id: '#5478', course: 'App Development', date: 'January 27, 2022', price: '$100.99', status: 'completed' },
    { id: '#4585', course: 'Graphic', date: 'May 27, 2022', price: '$200.99', status: 'processing' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-3xl font-bold text-slate-800">Order History</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {orderData.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className="hover:bg-slate-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 text-sm font-medium text-slate-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {order.course}
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {order.date}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-emerald-600">
                  {order.price}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentOrderHistoryPage;
