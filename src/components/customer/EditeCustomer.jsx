import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetInvoicesQuery } from '../../feature/invoice/invoiceApi';
import CustomerFrom from './CustomerFrom';

const EditeCustomer = () => {
  const  {customerId} = useParams();
  const {data: customer, isLoading, isError} = useGetInvoicesQuery(customerId);
  const {data} = customer || {}
  const {Orders} = data || {}

  // decide what to render 

  let content = null;
  if(isLoading){
    content = <div className=' text-center text-red'> loading...</div>
      
    
  }
  if(!isLoading && isError){
    content =<div className=' text-center text-red'> there was an erro </div>
  }
  if(!isLoading && !isError && customer){
    content =   <CustomerFrom customer={Orders} />
  }
 
   
  return (
    <>
    
    <div className=' p-6 bg-teal-950 m-3 rounded-md'>

      <div>
        <h1 className=' text-center text-3xl text-yellow-400  '>Edit customer</h1>
        </div>

      {content}
   
    </div>
    

    
    </>
  )
}


export default EditeCustomer