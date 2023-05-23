import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import errorCustomerSlice from "./slices/errorCustomerSlice";
import customerSlice from "./slices/customerSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    customers: customerSlice,
    errorCustomer: errorCustomerSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
