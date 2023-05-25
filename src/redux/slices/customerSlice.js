import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosAuthInterceptor from "../../components/Axios/axiosInterceptor";

const initialState = {
  count: 0,
  customers: [],
  customerById: null,
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

export const fetchCustomerById = createAsyncThunk(
  "customer/id",
  async (customerId) => {
    const response = await axiosAuthInterceptor.get(
      `load/customer/${customerId}/`
    );
    return response;
  }
);

export const createCustomer = createAsyncThunk("customer/new", async (data) => {
  const response = await axiosAuthInterceptor.post("load/customer/", data);
  return response;
});

export const updateCustomer = createAsyncThunk(
  "customer/update",
  async (payload) => {
    const { id, data } = payload;

    const response = await axiosAuthInterceptor.put(
      `load/customer/${id}/`,
      data
    );
    return response;
  }
);

export const deleteCustomer = createAsyncThunk(
  "customer/delete",
  async (customerId) => {
    const response = await axiosAuthInterceptor.delete(
      `load/customer/${customerId}/`
    );
    return response;
  }
);

const customerSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCustomerById: (state, action) => {
      state.customerById = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      //cases for fetchCustomers thunk:
      .addCase(fetchCustomers.pending, (state, action) => {
        sessionStorage.removeItem("customerById");
        state.customerById = {};
        // console.log("pending.");
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.count = action.payload.data.count;
        state.customers = action.payload.data.results;
      })

      //cases for deleteCustomer thunk:
      .addCase(deleteCustomer.pending, (state, action) => {
        console.log("pending customer delete api.");
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        console.log("rejected customer delete request.", action.payload);
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        console.log("cusotmer deleted successfully.");
      });
  },
});

export const { getCustomerById, setCustomerById } = customerSlice.actions;

export const allCustomers = (state) => state.customers.customers;
export const customerDetailsById = (state) => state.customers.customerById;
export const customerCount = (state) => state.customers.count;

export default customerSlice.reducer;
