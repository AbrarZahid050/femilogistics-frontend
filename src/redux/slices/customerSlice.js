import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuthInterceptor from "../../components/Axios/axiosInterceptor";
import Cookie from "js-cookie";

let customerById = sessionStorage.getItem("customerById");
customerById = JSON.parse(customerById);

const initialState = {
  count: 0,
  customers: [],
  customerById: customerById || {},
  status: "idle", // 'idle' | 'loading' | 'succeded' | 'failed'
  error: null,
};

export const fetchCustomers = createAsyncThunk(
  "customer/list",
  async (page) => {
    const response = await axiosAuthInterceptor.get(
      `load/customer/?limit=10&offset=${page}`
    );
    return response;
  }
);

const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getCustomerById: (state, action) => {
      const { id } = action.payload;
      const integerID = parseInt(id);

      const newState = state.customers.map((customer) => {
        if (integerID === customer.id) {
          const customerById = JSON.stringify(customer);
          console.log(customerById);
          sessionStorage.setItem("customerById", customerById);
          return customer;
        }
        return null;
      });
      state.customerById = newState[0];
    },
  },
  extraReducers(builder) {
    builder
      //cases for fetchCustomers thunk:
      .addCase(fetchCustomers.pending, (state, action) => {
        console.log("pending.");
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.customers = action.payload.data.results;
      });
  },
});

export const { getCustomerById } = customerSlice.actions;

export const allCustomers = (state) => state.customers.customers;
export const customerDetailsById = (state) => state.customers.customerById;

export default customerSlice.reducer;
