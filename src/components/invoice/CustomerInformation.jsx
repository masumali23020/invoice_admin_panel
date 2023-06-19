import React from 'react'

const CustomerInformation = () => {
  return (
    <div className=' flex justify-between  p-6  '>
    <div className=' flex flex-col space-y-5'>
        <h1 className='text-3xl uppercase font-medium'>bill to </h1>
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'   type="text" placeholder='customer name' />
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'    type="number" placeholder='015********' />
        <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'    type="text" placeholder='Adress' />
        
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
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="invoice-date" type="date"  />
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
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="due-date" type="date"  />
       </div>
    </div>
           
      
        
    </div>
</div>
  )
}

export default CustomerInformation