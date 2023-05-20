import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import createCustomerSlice from "./slices/createCustomerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    createCustomer: createCustomerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
