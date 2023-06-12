import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../feature/api/apiSlice";
// import authSliceReducer from "../feature/auth/authSlice";
// import customerSliceReducer from "../feature/customer/customerSlice";
// import orderSliceReducer from "../feature/order/orderSlice";
// import productsSliceReducer from "../feature/products/productsSlice";
// import tasksSliceReducer from "../feature/tasks/tasksSlice";
// import userSliceReducer from "../feature/users/userSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // auth: authSliceReducer,
        // products:productsSliceReducer,
        // orders: orderSliceReducer,
        // tasks: tasksSliceReducer,
        // users: userSliceReducer,
        // customer: customerSliceReducer,

        


    },

   
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware),
});