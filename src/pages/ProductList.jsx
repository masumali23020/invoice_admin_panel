import React from 'react';
import { AiOutlineFileSearch, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import ListOfProducts from '../components/productList/ListOfProducts';
// import { useGetProductsQuery } from '../feature/products/productsApi';

const ProductList = () => {


    

  return (
    
    <div className='  h-full w-full'>
        
   
        <div className=' flex justify-between items-center p-6'>
            
            <h1 className=' text-3xl font-medium'>Products</h1>
            <div className=' flex justify-evenly gap-4 '>
                <button className='uppercase bg-slate-400 hover:bg-slate-200 p-3 rounded-md text-white  duration-150 hover:text-black'>Import</button>
                <Link to="/product/add" >
                <button className='uppercase bg-slate-400 hover:bg-slate-300 p-3 rounded-md text-white hover:text-black duration-150'>Add Products</button>
                </Link>
                
                
            </div>

        </div>

        {/* search ber  */}
        <div className=' flex items-center gap-2 p-6 '>
            <AiOutlineFileSearch className='text-4xl  ' />
            <div className=' w-[90%] relative '>
                <input className=' w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 ' type='search' placeholder='search products'/>
            <AiOutlineSearch  className='absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3'/>
            </div>
            
        </div>

        {/* product list  */}
        <ListOfProducts />
       


        {/* pajination  */}
        
        <div className="flex justify-between items-center p-6 m-6">

        <span className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
            
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
                Prev
            </button>
            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
                <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
        </div>
        </div>


        


        
    </div>
  )
}

export default ProductList