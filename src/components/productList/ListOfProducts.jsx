import React from 'react';
import { useGetProductsQuery } from '../../feature/products/productsApi';
import Product from './Product';

const ListOfProducts = () => {
     const {data: res, isError, isLoading} = useGetProductsQuery();
    const {data } = res || {};
    const {products} = data || {}
     
    
   
  
  
  
  
//   decide what to render 
    let  content = null;
    if(isLoading){
      content = <div className='flex justify-center items-center   text-red-600'>loading...</div>
    }
  
    if(!isLoading && isError){
      content =  <div className='flex justify-center items-center text-red-600  '>Error data</div>
    }
    if(!isLoading && !isError && products?.length === 0){
      content =  <div className='flex justify-center items-center  text-red-600 '>No task found</div>
    }
  
    if(!isLoading && !isError && products?.length > 0){
      content = products.map((product) => <Product key={product._id} producte={product}  /> )
    }
  return (
   <>
    
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 font-medium text-[20px] py-3">
                            Product name
                        </th>
                    
                        <th scope="col" className="px-6 font-medium text-[20px] py-3">
                            Category
                        </th>
                        
                        <th scope="col" className="px-6 font-medium text-[20px] py-3">
                            Stock
                        </th>
                        <th scope="col" className="px-6 font-medium text-[20px] py-3">
                            Price
                        </th>
                    
                        <th scope="col" className="px-6 font-medium text-[20px] py-3">
                            Action
                        </th>
                    </tr>
                </thead>
              
             {content}
           
            
                  
                
                    
               
            </table>
        </div>
   </>
  )
}

export default ListOfProducts