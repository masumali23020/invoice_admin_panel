import React, { useState } from 'react';



const customerInitialData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const initialInvoiceItems = [
  { name: "", productCode: "", quantity: "", productPrice: "", amount: "" },
  { name: "", productCode: "", quantity: "", productPrice: "", amount: "" },
  { name: "", productCode: "", quantity: "", productPrice: "", amount: "" },
  { name: "", productCode: "", quantity: "", productPrice: "", amount: "" },
];
const todayDate = (addDay) => {
  const date = new Date();
  date.setDate(date.getDate() + addDay);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};


const CustomerInformation = () => {

  const [customer, setCustomer] = useState(customerInitialData);
  const [date, setDate] = useState(todayDate(0));
  const [dueDate, setDueDate] = useState(todayDate(2));

  const handelCustomer = (field, value) => {
    setCustomer({...customer, [field]: value })
  }

  const hadelCusterSubmit = () => {
    console.log(customer);
    console.log(date);
    console.log(dueDate);
  }

  return (
    <div className=' flex justify-between  p-6  ' onClickCapture={hadelCusterSubmit}>
     
    <div className=' flex flex-col space-y-5'>
        <h1 className='text-3xl uppercase font-medium'>bill to </h1>
   
        {/* name  */}
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
        type="text" 
        placeholder='customer name' 
        value={customer.name}
        onChange={(e) => handelCustomer("name", e.target.value)}
        />
        {/* mobile number  */}
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
         type="number" 
         placeholder='015********'
         value={customer.mobile}
         onChange={(e) => handelCustomer("mobile", e.target.value)} />
         {/* emai  */}
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
         type="email"
          placeholder='masum0218@gmail.com'
          value={customer.email}
          onChange={(e) => handelCustomer("email", e.target.value)} />

          {/* adress  */}
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
         type="text" 
         placeholder='Adress'
         value={customer.address}
         onChange={(e) => handelCustomer("address", e.target.value)}
          />
        
    </div>
    <div >
    
            {/* Invoice no */}
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-" htmlFor="invoice#">
        Invoice#
        </label>
      </div>
     <div className="md:w-2/3">
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="invoice#" type="text" placeholder='INV:34535' disabled  />
       </div>
    </div>
            {/* invoice date */}
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-" htmlFor="invoice-date">
            invoice Date
        </label>
      </div>
     <div className="md:w-2/3">
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="invoice-date"
        type="date"
        value={date} 
        onChange={e => setDate(e.target.value)} />
       </div>
    </div>
            {/* due date */}
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="due-date">
            Due Date
        </label>
      </div>
     <div className="md:w-2/3">
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="due-date"
        type="date" 
        value={dueDate} 
        onChange={e => setDueDate(e.target.value)}
        
        />
       </div>
    </div>
           
  
        
    </div>
   
</div>
  )
}

export default CustomerInformation