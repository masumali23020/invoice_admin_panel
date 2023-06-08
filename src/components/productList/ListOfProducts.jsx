import React from 'react'

const ListOfProducts = () => {
  return (
   <>
    
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-table-search-1" className="sr-only" >checkbox</label>
                            </div>
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div className=' flex gap-4'>
                                <img src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/products/product-12-40x40.jpg" alt="product Imge" />
                                <div className='space-y-3'>
                                    <a className=' hover:underline ' href="#">Apple MacBook Pro 17"</a>
                                    <div className='flex  justify-between text-slate-500'>
                                        <p>ID:1234</p>
                                        <p>sku:dfsg24</p>
                                    </div>
                                </div>
                            </div>
                        </th>
                    
                        
                        <td className="px-6 py-4">
                            Router
                        </td>
                        <td className="px-6 py-4">
                            3 in stock
                        </td>
                        
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    
                        <td className="flex items-center px-6 py-4 space-x-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                        </td>
                    </tr>
                    </tbody>
   </>
  )
}

export default ListOfProducts