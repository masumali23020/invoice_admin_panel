/* eslint-disable no-unused-vars */
import React from "react";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteInvoiceMutation, useGetInvoicesQuery } from "../feature/invoice/invoiceApi";
 
const Invoices = () => {
 const {data: customerList, isLoading, isError} = useGetInvoicesQuery()
 const [deleteInvoice] = useDeleteInvoiceMutation()
 const {data} = customerList || {}
 const {Orders} = data || {}
 const navigate = useNavigate()




const customerDelete = () => {
  deleteInvoice()
}


  // decide what to render 

  let content = null;
  if(isLoading) content = <p className=" text-current text-3xl text-amber-500">...loading</p> 

  if(!isLoading && isError){
    content = <p className=" text-current text-3xl text-amber-500">there was an error occured!</p> 
  }
  if(!isLoading && !isError && Orders){
    content = Orders?.map((order, i) => {

      const {customer,total,invoiceNumber,paymentStatus, _id} = order || {}
      const {name, mobile} = customer || {}
      // console.log(name);
      return (
         <tbody key={order._id} >
            <tr  >
        <th className="text-center mx-auto font-body text-[15px]">{i + 1}</th>
        <td className="text-center mx-auto font-body text-[15px]">INV00{invoiceNumber}</td>
        <td className="text-center  mx-auto font-medium text-[15px]">{name}</td>
        <td className="text-center mx-auto font-body text-[15px]">{mobile}</td>
        <td className="text-center mx-auto font-body text-[15px]">{total}</td>
      
          <td className="text-center mx-auto font-body text-[15px]">
            <span className="bg-green-100 font-bold p-1 rounded text-green-700 text-xs">
              {paymentStatus}
            </span>
          </td>

       
        <th className=" font-body text-[15px] flex gap-2  items-center justify-center" >
          
        <Link to={`/customer/edit/${_id}`} > 
          <span className="text-2xl cursor-pointer">
            <FiEdit className="text-green-800 hover:text-green-500 transform ease-in-out  duration-150" />
          </span>
          </Link>
  
          <span className="text-2xl cursor-pointer" onClick={() => deleteInvoice(_id)}>
            <MdDeleteForever className="text-red-700 hover:text-red-500" />
          </span>
        </th>
      </tr>
          
           </tbody>
      

    )})
  }



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
          
            {content}
         
        </table>
      </div>
    </div>
  );
};

export default Invoices;