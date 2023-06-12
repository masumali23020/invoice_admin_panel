import React, { useState } from 'react';
import { useAddProductMutation } from '../feature/products/productsApi';

const EditeProduct = () => {
    const [addProduct, {  isError, isLoading, isSuccess}] = useAddProductMutation();

    const [name, setName] = useState();
    const [productCode, setProductCode] = useState();
    const [category, setCatagory] = useState();
    const [price, setPrice] = useState();
    const [photo, setPhoto] = useState();
    const [stock, setStock] = useState();

    console.log(price);

   
     const resetFrom = () => {
        setName('')
        setProductCode('')
        setCatagory('')
        setPrice('')
        setPhoto('')
        setStock('')
     }

    const handelSubmit = (e) => {
        e.preventDefault()
        addProduct({
            name,
            productCode,
            category,
            price,
            photo,
            stock
        });

        resetFrom()
    }
    
  return (
    <>
    
    <div className=' p-6 bg-teal-950 m-3 rounded-md'>
    <form  onSubmit={handelSubmit} >
      <div >
        <h1 className=' text-center text-3xl text-yellow-400  '>Add Product</h1>
         
        {/* name */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-white"
            >
              Name
            </label>
            <div className="mt-1">
              <input
                required
                id="name"
                type="text"
                name="name"
                value={name} 
                onChange={e => setName(e.target.value)}                
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
        </div>

        {/* Photo Url */}
        <div className="grid grid-cols-1 mt-3 gap-x-6 gap-y-3 sm:grid-cols-6">
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium leading-6 text-white"
            >
              Photo Url
            </label>
            <div className="mt-1">
            <input
                required
                id="photo"
                type="text"
                name="photo"
              
                value={photo}
                onChange={e => setPhoto(e.target.value)}
              
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
        </div>

       

        <div className="grid grid-cols-1 mt-3 gap-x-6 gap-y-3 sm:grid-cols-6">
          {/* category */}
          <div className="col-span-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-white"
            >
              category
            </label>
            <div className="mt-1">
              <input
                required
                id="category"
                type="text"
                name="category"
              
                value={category} onChange={e => setCatagory(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>

          {/* price */}
          <div className="col-span-3">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-white"
            >
              price
            </label>
            <div className="mt-1">
              <input
                required
                id="price"
                type="number"
                name="price"
               
                value={price} onChange={e => setPrice(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
          {/* productCode */}
          <div className="col-span-3">
            <label
              htmlFor="productCode"
              className="block text-sm font-medium leading-6 text-white"
            >
              productCode
            </label>
            <div className="mt-1">
              <input
                required
                id="productCode"
                type="text"
                name="productCode"
               
                value={productCode} onChange={e => setProductCode(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
          {/* stock */}
          <div className="col-span-3">
            <label
              htmlFor="stock"
              className="block text-sm font-medium leading-6 text-white"
            >
              stock
            </label>
            <div className="mt-1">
              <input
                required
                id="stock"
                type="number"
                name="stock"
               
                value={stock} onChange={e => setStock(e.target.value)}
                className="block w-full rounded-md outline-0  py-1.5 border-0  bg-white text-gray-700  focus:ring-2 focus:ring-blue-500 ring-offset-0 px-3"
              />
            </div>
          </div>
        </div>

        {/* submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 mt-5 text-sm font-semibold text-white rounded-md bg-amber-700 shadow-sm bg-cyan hover:opacity-90 active:opacity-100  disabled:bg-slate-600 disabled:hover:opacity-100"
          >
            Save
          </button>
        </div>
      </div>
      {isError && <div className=' bg-red text-center text-3xl'>There was an error adding product !</div>}
      {isSuccess && <div className=' bg-red text-center text-3xl'>Product was added successfully</div>}
    </form>
    </div>
    

    
    </>
  )
}

export default EditeProduct