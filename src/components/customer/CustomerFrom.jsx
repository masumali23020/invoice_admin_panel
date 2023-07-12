import React, { useState } from 'react';
import { useEditInvoiceMutation } from '../../feature/invoice/invoiceApi';

const CustomerFrom = ({customer}) => {
    const [editInvoice, {  isError, isLoading, isSuccess}] = useEditInvoiceMutation();
   
    console.log(customer);


    const {customer:custom,  total:totals, invoiceNumber:invoicess}  = customer || {};
    const {mobile:mobiles, name:names}  = custom || {};

   

   
 
    const {
        _id,
        names: initialName, 
        mobiles: initialmobile,
         
       } = custom || {}
    const {
        
        totals: initialTotal, 
        invoicess: initialInvoiceNumber, 
        paymentStatus: initialPaymentStatus
       } = customer || {}
  

    const [name, setName] = useState(initialName);
    const [mobile, setMobile] = useState(initialmobile);
    const [total, setsetTotal] = useState(initialTotal);
    const [invoiceNumber, setInvoiceNumber] = useState(initialInvoiceNumber);
    const [paymentStatus, setPaymentStatus] = useState(initialPaymentStatus);
   



   
     const resetFrom = () => {
        setName('')
        setMobile('')
        setsetTotal('')
        invoiceNumber('')
        paymentStatus('')
        
     }

    const handelSubmit = (e) => {
        e.preventDefault()
        editInvoice({
          id: productId,
           
            productData:{
           
             
            name,
            mobile,
            total,
            invoiceNumber,
            paymentStatus
        
              
        }});
        // resetFrom()

        
    }
  return (
    <div>
         <form   onSubmit={handelSubmit} >
      <div >
        
         
        {/* name */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                required
                id="name"
                type="text"
                name="name"
                value={name} 
                onChange={e => setName(e.target.value)}                
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
        </div>

        {/* Photo Url */}
        <div className="grid grid-cols-1 mt-3 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-white"
            >
              Mobile No:
            </label>
            <div className="mt-1">
            <input
                required
                id="photo"
                type="text"
                name="photo"
              
                value={mobile}
                onChange={e => setMobile(e.target.value)}
              
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
        </div>

       

        <div className="grid grid-cols-1 mt-3 gap-x-6 gap-y-3 sm:grid-cols-6">
          {/* category */}
          <div className="col-span-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-white"
            >
              Total
            </label>
            <div className="mt-1">
              <input
                required
                id="category"
                type="text"
                name="category"
              
                value={total} onChange={e => setsetTotal(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>

          {/* price */}
          <div className="col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-white"
            >
              Invoice No :
            </label>
            <div className="mt-1">
              <input
                required
                id="price"
                type="number"
                name="price"
               
                value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
          {/* productCode */}
          <div className="col-span-3">
            <label
              htmlFor="productCode"
              className="block text-sm font-medium leading-6 text-white"
            >
              Payment status
            </label>
            <div className="mt-1">
              <input
                required
                id="productCode"
                type="text"
                name="productCode"
               
                value={paymentStatus} onChange={e => setPaymentStatus(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
          {/* stock */}
         
        </div>

        {/* submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 mt-5 text-sm font-semibold text-white rounded-md bg-amber-700 shadow-sm bg-cyan hover:opacity-90 active:opacity-100  disabled:bg-slate-600 disabled:hover:opacity-100"
          >
            Save
          </button>
        </div>
      </div>
      {isError && <div className=' bg-red text-center text-3xl'>There was an error editing product !</div>}
      {isSuccess && <div className=' bg-red text-center text-3xl'>Product was added successfully</div>}
    </form>
    </div>
  )
}

export default CustomerFrom