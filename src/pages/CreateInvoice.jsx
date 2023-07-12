import React, { useEffect, useState } from 'react';
import { AiOutlinePrinter } from 'react-icons/ai';
import { useAddInvoiceMutation, useGetInvoicesQuery } from '../feature/invoice/invoiceApi';




const customerInitialData = {
  name: "",
  email: "",
  mobile: "",
  address: "",
};

const initialInvoiceItems = [
    
    {
      name: "",
      quantity: 1,
      productPrice: 0,
      amount: 0,
    },
  


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



const CreateInvoice = () => {

  const { data: { data: { count, orders = [] } = {} } = {} } =
    useGetInvoicesQuery();

    const [addInvoice, {isSuccess, isError, isLoading}] = useAddInvoiceMutation();


  const [customer, setCustomer] = useState(customerInitialData);
  const [date, setDate] = useState(todayDate(0));
  const [dueDate, setDueDate] = useState(todayDate(2));
  const [invoiceItems , setInvoiceItems] = useState(initialInvoiceItems)
  const [paymentStatus, setPaymentStatus] = useState("paid");
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);
  const [productCatagroy, setProductCatagroy] = useState("")



  
  //  subtotal calculation 
  useEffect(() => {
    const subTotalPrice = invoiceItems.reduce((sum, item) => {
      
      
      // console.log(sum, item, item.amount);
      return sum + item.amount;
    }, 0);
    setSubTotal(subTotalPrice);
  }, [invoiceItems]);

  useEffect(() => {
    const totalPrice = subTotal - discount;
    setTotal(totalPrice);
  }, [subTotal, discount]);

 

  const handelCustomerChange = (field, value) => {
    
    setCustomer({...customer, [field]: value })
  }
  const handelProductChange = (index,field, value) => {
    const updateItems = [...invoiceItems];
    updateItems[index][field] = value;
    setInvoiceItems(updateItems)
    
  }

  // auto invoice nub=mber create 
  const invNum = orders.map((order) => order.invoiceNumber);
  const maxNum = Math.max(...invNum);

  
  


  // table 


  // custom mok product data 
  const customProducts = ["Book", "watch", "Telivision", "Mobile", "Nekles", "Pen", "house", "paper", "cloth" , "bank", "bookShop", "apple"]

  const serchProduct = (serchTerm, e) => {
    e.preventDefault()
    setProductCatagroy(serchTerm)

    // console.log(serchTerm)

  }
   // handelAdd 
  const handelAdd = () => {
    
    setInvoiceItems([
      ...invoiceItems,
       {
      name: "",
      productCode: "",
      quantity: "",
      productPrice: "",
      amount: "",
    }
  ])
  }

  // handel row delete 
  const handleDelet = (id) => {
    const rowDelete =[...invoiceItems];
    
    rowDelete.splice(id, 1);
    setInvoiceItems(rowDelete)


  }



 






  // // handel print 
  const hadelPrnted = () => {

    window.print()
  }

  const hadelCusterSubmit = () => {
    
    
   
   
    const invoiceData = {
      invoiceNumber: maxNum + 1,
      customer,
      products: invoiceItems,
      subTotal,
      discount,
      total,
      date,
      dueDate,
      paymentStatus,
    };
    addInvoice(invoiceData)
    
 
  }

  
  
  return (
    <div className='container mx-auto    p-10' >
        <div className='' >
        <div className='ml-6 cursor-pointer bg-slate-300 hover:bg-slate-400 transform duration-200 ease-in   w-20  rounded-md px-4 py-2' onClick={hadelPrnted}>
         <AiOutlinePrinter size={30} className='text-center mx-auto '  />
        
         </div>
            <div className=' uppercase text-center text-3xl p-6'>
                <h1>invoice Create</h1>
            </div >


            {/* customer details  */}
        
    
            <div className=' flex justify-between  p-6  ' >
     
                <div className=' flex flex-col space-y-5'>
                    <h1 className='text-3xl uppercase font-medium'>bill to </h1>
                
                    {/* name  */}
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
                    type="text" 
                    placeholder='customer name' 
                    value={customer.name}
                    onChange={(e) => handelCustomerChange("name", e.target.value)}
                    />
                    {/* mobile number  */}
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
                      type="number" 
                      placeholder='015********'
                      value={customer.mobile}
                      onChange={(e) => handelCustomerChange("mobile", e.target.value)} />
                      {/* emai  */}
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
                      type="email"
                      placeholder='masum0218@gmail.com'
                      value={customer.email}
                      onChange={(e) => handelCustomerChange("email", e.target.value)} />
            
                      {/* adress  */}
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   
                      type="text" 
                      placeholder='Adress'
                      value={customer.address}
                      onChange={(e) => handelCustomerChange("address", e.target.value)}
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


           {/* tabile  */}
           <div className='p-6 flex flex-col   '>
              <div className="overflow-x-auto relative">
            
                    <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-center">
                      <th>SL</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Rate</th>
                      <th>Amount</th>
                      <th></th>
                    </tr>
                  </thead>
              
                
                    <tbody  >
                      {invoiceItems.map((item,i) => {
                        const { name, quantity, productPrice } = item
                    

                        return (
                          (
                            <tr key={i} >
                            <th> {1 + i}</th>
                            <td >
                              <input
                              name="name"
                                type="text"
                                placeholder="Book"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  max-w-xs ms-5"
                                value={name}
                                onChange={(e)=> handelProductChange( i, "name", e.target.value,)  }
                              
                                // value={productCatagroy}
                                // onClick={() => serchProduct(productCatagroy)}
                              
                              
                                
                              />
                            </td>
                            <td>
                              <input
                              name="qunatity"
                                type="number"
                                placeholder="1"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                                value={quantity}
                                onChange={(e)=> handelProductChange( i, "quantity", e.target.value,)  }
                              
                              />
                            </td>
                            <td>
                              <input
                                // readOnly
                                name='rate'
                                type="number"
                                placeholder="12"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-24 max-w-xs ms-5 text-center"
                                onChange={(e)=> handelProductChange( i, "productPrice", e.target.value,)  }
                                value={productPrice}
                                
                              />
                            </td>
                            <td>
                              <input
                              name='amount'
                                readOnly
                                type="text"
                                placeholder="1"
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                                disabled
                                value={(item.amount = quantity * productPrice)}
                                onChange={(e)=> handelProductChange( i, "amount", e.target.value,)  }
                              
                              />
                            </td>
                            <td>
                              <span
                                onClick={() => handleDelet(i)}
                                className="text-red-700  py-2 px-3 rounded-md cursor-pointer "
                              >
                              
                              
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                            
          
                              </span>
                            </td>
                          </tr>
                          )
                        )
                      } )}
                  
                    
                
                  </tbody>
              



              

                
            
                  </table>
                
            
                  
                  {/* dropdown product when click the catagory input  */}
                  <div className='ml-16   z-20 '>
                    {customProducts.filter((item) => {
                      const searchTerm = productCatagroy.toLocaleLowerCase();
                      const productName = item.toLocaleLowerCase();

                      return searchTerm &&  productName.startsWith(searchTerm) && productName !== searchTerm
                    })
                    .slice(0, 5)
                    .map((item) => (
                      <div key={item} onClick={() => serchProduct(item)} className=' hover:bg-slate-300 w-28 py-1 text-center rounded-md'>
                        {item}
                      </div>
                    ))}
                  </div>
                


                <button
              
                  className="bg-fuchsia-600 p-2 text-center rounded-md text-2xl text-slate-100 mt-3 hover:bg-fuchsia-500 transform ease-in duration-300 hover:text-white"
                  onClick={handelAdd}
                  type='submit'
                
                >
                  Add Item
                </button>
              </div>

          
           </div>
      

           {/* total amount  */}
           <div className=" flex flex-col  items-end px-6  ">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Sub Total</td>
                    <td>
                      <p
                        disabled
                                           
                        className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight  w-32 max-w-xs ms-5"
                        
                      
                      >{subTotal} </p>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Discount</td>
                    <td>
                    <input
                        type="text"
                        
                        placeholder="$00"
                        className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none  w-32 max-w-xs ms-5"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                      />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Total</td>
                    <td>
                    <p
                        disabled
                                           
                        className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight  w-32 max-w-xs ms-5"
                        
                      
                      >{total} </p>
                    </td>
                  </tr>
                  {/* row 4 */}
                  
                
                  {/* <tr>
                    <td>Blance due</td>
                    <td>
                      <input
                        type="text"
                        disabled
                        placeholder="$00"
                        className="bg-gray-200 text-center appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none  w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr> */}
                </tbody>
              </table>

            
            </div>
          </div>

            {/* payment status  */}
            <div className="flex">
              <p className="text-sm text-gray-500 me-2">Payment Status</p>
              <select
                onChange={(e) => setPaymentStatus(e.target.value)}
                className="select select-bordered w-full max-w-xs focus:outline-none"
              >
                <option value={"paid"}>Paid</option>
                <option value={"unpaid"}>Unpaid</option>
              </select>
            </div>
          

         

           {/* save button  */}
           <div className='w-full text-end mt-10 px-6'>
              <button onClickCapture={hadelCusterSubmit} className=' bg-emerald-600 text-end px-6 py-2  rounded-md text-2xl text-slate-100 mt-3 hover:bg-emerald-400 transform ease-in duration-300 hover:text-white  '
                disabled={isLoading}>
               save
              </button>

           </div>


           { isError && <p className='text-red-950 text-center text-3xl'>error </p>}
           { isSuccess && <p className='text-red-950 text-center text-3xl'>succesfull</p>}

        

      


       


        </div>
           <p className='text-center text-slate-400 '><span className='text-slate-500 font-body text-xl'> Note: </span> pleace pay within 10 day and save 20%</p>
      
        
       </div>

    
  )
}

export default CreateInvoice





