import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import customerSlice from "./slices/customerSlice";
import errorCustomerSlice from "./slices/errorCustomerSlice";
import profileSlice from './slices/profileSlice';
import userSlice from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: userSlice,
    customers: customerSlice,
    errorCustomer: errorCustomerSlice,
    profile:profileSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
