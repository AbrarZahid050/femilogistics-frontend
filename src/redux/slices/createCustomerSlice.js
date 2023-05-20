import { createSlice } from "@reduxjs/toolkit";
import * as yup from "yup";

const initialState = {
  customerDetails: {},
  billing_address: {},
  error: {},
};

export const createCustomerSlice = createSlice({
  name: "createCustomerSlice",
  initialState,
  reducers: {
    addDetail: (state, action) => {
      const { key, value } = action.payload;
      state.customerDetails[key] = value;
    },

    addBillingDetail: (state, action) => {
      const { key, value } = action.payload;
      state.billing_address[key] = value;
    },

    generalInfoValidation: (state, action) => {
      const { key, value } = action.payload;
      //3 conditions checking => if key is status, name, identifier then yup.schema is different.
      if (key === "status" || key === "name" || key === "identifier") {
        try {
          yup
            .string()
            .required("is required.")
            .min(3, "must be at least 3 characters long.")
            .validateSync(value);
          state.error[key] = null;
        } catch (err) {
          state.error[key] = `${key} ${err.message}`;
        }
      } else if (key === "email") {
        try {
          yup
            .string()
            .required("is required.")
            .email("should be valid.")
            .validateSync(value);
          state.error[key] = null;
        } catch (err) {
          state.error[key] = `${key} ${err.message}`;
        }
      } else if (key === "phone" || key === "fax") {
        //phone and fax requires no validation.
        return;
      }
    },

    billingInfoValidation: (state, action) => {
      const { key, value } = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDetail, addBillingDetail, generalInfoValidation } =
  createCustomerSlice.actions;

export const customerDetails = (state) => state.createCustomer.customerDetails;

export const billingDetails = (state) => state.createCustomer.billing_address;

export const getErrors = (state) => state.createCustomer.error; //writing it here instead of writing in the component

export default createCustomerSlice.reducer;
