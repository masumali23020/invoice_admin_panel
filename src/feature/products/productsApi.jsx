import { apiSlice } from "../api/apiSlice";


export const productsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
              url: "/products",
            }),
          }),

          addProduct: builder.mutation({
            query: (data) => ({
              url: '/products',
              method: "POST",
              body: data,
            })
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

export const {useGetProductsQuery, useDeleteProductMutation, useAddProductMutation} = productsApi