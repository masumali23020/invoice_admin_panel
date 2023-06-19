import React from 'react'

const TotalAmount = () => {
  return (
    <div className=" flex flex-col  items-end px-6  ">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>Sub Total</td>
                    <td>
                      <input
                      disabled
                        type="text"
                        placeholder="$00"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight  w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Discount</td>
                    <td>
                      <input
                        type="text"
                        placeholder="$00"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Total</td>
                    <td>
                      <input
                        type="text"
                        disabled
                        placeholder="$00"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none  w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>Paid Amount</td>
                    <td>
                      <input
                        type="text"
                        disabled
                        placeholder="$00"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none  w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <td>Blance due</td>
                    <td>
                      <input
                        type="text"
                        disabled
                        placeholder="$00"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700 leading-tight focus:outline-none  w-32 max-w-xs ms-5"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
  )
}

export default TotalAmount