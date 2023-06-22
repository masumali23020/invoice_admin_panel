import React, { useState } from 'react'

const Table = () => {
  const [data, setData] = useState([{
    catagory: "",qunatity: "", rate:'',	amount: '', id: 1
  }])
  const [val, setValue] = useState([{}])
  const [productCatagroy, setProductCatagroy] = useState("")

  // custom mok product data 
  const customProducts = ["Book", "watch", "Telivision", "Mobile", "Nekles", "Pen", "house", "paper", "cloth" , "bank", "bookShop", "apple"]

  const serchProduct = (serchTerm) => {
    setProductCatagroy(serchTerm)

    // console.log(serchTerm)

  }
  const handelAdd = (e) => {
    e.preventDefault()
    setData([...data, {
      catagory: "cat",qunatity: "qr", rate:'rq',	amount: '1', id: Date.now()
    }])
  }

  // handelAdd 
  const handleDelet = (id) => {
    const row = data;
    const filters = row.filter((item) => item.id !== id)

  setData([...filters])


  }


  const handelChange = (onChangValue, i) => {
    const inputData = [...val];
    inputData[i] = onChangValue.target.value;
    setValue(inputData)
  }




   return (
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
                  {data.map((item,i) => (
                    <tr key={i} >
                    <th> {1 + i}</th>
                    <td >
                      <input
                       name="catagory"
                        type="text"
                        placeholder="Book"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  max-w-xs ms-5"
                        onChange={(e, i)=> setProductCatagroy(e.target.value, i)  }
                        // value={productCatagroy}
                        onClick={() => serchProduct(productCatagroy)}
                       
                        
                      />
                    </td>
                    <td>
                      <input
                      name="qunatity"
                        type="number"
                        placeholder="1"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                        defaultValue={0}
                       
                      />
                    </td>
                    <td>
                      <input
                        // readOnly
                        name='rate'
                        type="number"
                        placeholder="12"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-24 max-w-xs ms-5 text-center"
                        
                      />
                    </td>
                    <td>
                      <input
                      name='amount'
                        readOnly
                        type="text"
                        placeholder="1"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                       
                      />
                    </td>
                    <td>
                      <span
                        onClick={() => handleDelet(item.id)}
                        className="text-red-700  py-2 px-3 rounded-md cursor-pointer "
                      >
                       
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                         </svg>
                     
  
                      </span>
                    </td>
                  </tr>
                  ))}
               
                
             
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
  )
}

export default Table