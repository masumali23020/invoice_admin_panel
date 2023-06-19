import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
  
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
              url: "/products",
              
             
              
            }),
          
          }),

          

        getProduct: builder.query({
            query: (_id) => ({
              url: `/products/${_id}`
            }),
          }),
         

          addProduct: builder.mutation({
            query: (data) => ({
              url: '/products',
              method: "POST",
              body: data,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
              try {
                const { data: createdProduct } = await queryFulfilled;
      
                // pessimistic cash update.
                dispatch(
                  apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
                    draft.push(createdProduct);
                  })
                );
              } catch (error) { }
            },
         

          }),

          editProduct: builder.mutation({
            query: ({id, productData}) => ({
              url: `/products/${id}`,
              method: "PUT",
              body: productData,
            }),

            async onQueryStarted(arg, {dispatch, queryFulfilled}){
              try{
                const {data: edittedPRoduct} = await queryFulfilled;

                dispatch(
                  apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
                    return draft.map((product) =>
                    product.id == arg.id ? edittedPRoduct : product
                    );
                  })
                );
      

                dispatch(
                  apiSlice.util.updateQueryData("getProduct", arg.id, (draft) => {
                    return  edittedPRoduct
                    
                  } )
                )

              }catch(error){}
            }
           
         

          }),



      

          deleteProduct: builder.mutation({
            query: (id) => ({
              url: `/products/${id}`,
              method: "DELETE",
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                // optimistic cache update.
                const result = dispatch(
                  apiSlice.util.updateQueryData("getProducts", undefined, (draft) => {
                    
                    return draft.filter((product) => product._id != arg);
                  })
                );
        
                try {
                  await queryFulfilled;
                } catch (error) {
                  result.undo();
                }
              },
        
          })


        
    }),
});

export const {useGetProductsQuery, useDeleteProductMutation, useAddProductMutation, useEditProductMutation, useGetProductQuery } = productsApi