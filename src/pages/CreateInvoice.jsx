import React from 'react'
import CustomerInformation from '../components/invoice/CustomerInformation'
import Table from '../components/invoice/Table'
import TotalAmount from '../components/invoice/TotalAmount'

const CreateInvoice = () => {
  return (
    <form className='container mx-auto    p-10' >
        <div className=''>
            <div className=' uppercase text-center text-3xl p-6'>
                <h1>invoice Create</h1>
            </div>


            {/* customer details  */}
        
    
           <CustomerInformation />


           {/* tabile  */}
           <Table />

           {/* total amount  */}
           <TotalAmount />

           {/* save button  */}
           <div className='w-full text-end mt-10 px-6'>
              <button type="button" className=' bg-emerald-600 text-end px-6 py-2  rounded-md text-2xl text-slate-100 mt-3 hover:bg-emerald-400 transform ease-in duration-300 hover:text-white  '>
               save
              </button>
           </div>

      

           <p className='text-center text-slate-400 '><span className='text-slate-500 font-body text-xl'> Note: </span> pleace pay within 10 day and save 20%</p>

       


        </div>
      
        
       </form>

    
  )
}

export default CreateInvoice