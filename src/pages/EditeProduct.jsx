import React from 'react';
import { useParams } from 'react-router-dom';
import EditFrom from '../components/productList/EditFrom';
import { useGetProductQuery } from '../feature/products/productsApi';

const EditeProduct = () => {
  const  {productId} = useParams();
  const {data: product, isLoading, isError} = useGetProductQuery(productId);


  // decide what to render 

  let content = null;
  if(isLoading){
    content = <div className=' text-center text-red'> loading...</div>
      
    
  }
  if(!isLoading && isError){
    content =<div className=' text-center text-red'> there was an erro </div>
  }
  if(!isLoading && !isError && product){
    content =   <EditFrom product={product} />
  }
 
   
  return (
    <>
    
    <div className=' p-6 bg-teal-950 m-3 rounded-md'>

      <div>
        <h1 className=' text-center text-3xl text-yellow-400  '>Edit Product</h1>
        </div>

      {content}
   
    </div>
    

    
    </>
  )
}

export default EditeProduct