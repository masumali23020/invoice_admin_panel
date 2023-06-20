/* eslint-disable no-unused-vars */
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
 
const Invoices = () => {
  return (
    <div className="px-8 py-3 bg-[#F1F5F9] min-h-screen">
      <h1 className="text-3xl text-center  ">
        
      Invoices
         
        
      </h1>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-display ">Customer List </h2>
        <Link to={"/Add_Invoice"} className="bg-lime-500 px-5 py-3 rounded-md hover:bg-lime-400 transform ease-in duration-300" >
          Create Invoice
        </Link>
      </div>
      <div className="overflow-x-auto bg-base-100 rounded p-2 mt-2">
        <table className="table table-zebra w-full">
          <thead className="">
            <tr>
              <th >SL</th>
              <th>Invoice No</th>
              <th>Customer Name</th>
              <th>Customer Mobile</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th >Action</th>
            </tr>
          </thead>
          <tbody className=" ">
            {[1, 2, 3, 4, 5, 6, ].map((item, index) => (
              <tr key={item} >
                <th className="text-center mx-auto font-body text-[15px]">{index + 1}</th>
                <td className="text-center mx-auto font-body text-[15px]">INV00{item}</td>
                <td className="text-center  mx-auto font-medium text-[15px]">Junnayed Ahmed</td>
                <td className="text-center mx-auto font-body text-[15px]">015********</td>
                <td className="text-center mx-auto font-body text-[15px]">254</td>
                {item % 2 === 0 ? (
                  <td className="text-center mx-auto font-body text-[15px]">
                    <span className="bg-green-100 font-bold p-1 rounded text-green-700 text-xs">
                      PAID
                    </span>
                  </td>
                ) : (
                  <td className="text-center mx-auto font-body text-[15px]">
                    <span className="bg-red-100 font-bold p-1 rounded text-red-500 text-xs">
                      UNPAID
                    </span>
                  </td>
                )}
                <th className=" font-body text-[15px] flex gap-2  items-center justify-center">
                  <span className="text-2xl cursor-pointer">
                    <FiEdit className="text-green-800 hover:text-green-500 transform ease-in-out  duration-150" />
                  </span>

                  <span className="text-2xl cursor-pointer">
                    <MdDeleteForever className="text-red-700 hover:text-red-500" />
                  </span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;