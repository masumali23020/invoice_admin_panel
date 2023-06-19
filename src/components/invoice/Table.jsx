import React from 'react'

const Table = () => {
  return (
    <div className='p-6 flex flex-col   '>
          <div className="overflow-x-auto">
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
              <tbody>
               
                  <tr >
                    <th> 1</th>
                    <td>
                      <input
                        type="text"
                        placeholder="Book"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  max-w-xs ms-5"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="1"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                        defaultValue={0}
                      />
                    </td>
                    <td>
                      <input
                        // readOnly
                        type="number"
                        placeholder="12"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-24 max-w-xs ms-5 text-center"
                      />
                    </td>
                    <td>
                      <input
                        readOnly
                        type="text"
                        placeholder="1"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-20 max-w-xs ms-5 text-center"
                      />
                    </td>
                    <td>
                      {/* <span
                        // onClick={() => handleRemoveRow(r.id)}
                        className="text-red-700  py-2 px-3 rounded-md cursor-pointer"
                      >
                       
                      
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                         </svg>
                     

                      </span> */}
                    </td>
                  </tr>
               
              </tbody>
            </table>
            <button
            //   onClick={handleAddRow}
            // onClick={() => }
              className="bg-fuchsia-600 p-2 text-center rounded-md text-2xl text-slate-100 mt-3 hover:bg-fuchsia-500 transform ease-in duration-300 hover:text-white"
            >
              Add Item
            </button>
          </div>

          
        </div>
  )
}

export default Table