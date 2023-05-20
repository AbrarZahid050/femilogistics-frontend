import { createSlice } from "@reduxjs/toolkit";
import * as yup from "yup";

const initialState = {
  customerDetails: {},
  billing_address: {},
  managers: {},
  finance: {},
  note_to_carrier: "",
  error: { billing_address: {} },
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

    addManagersDetail: (state, action) => {
      const { key, value } = action.payload;
      state.managers[key] = value;
    },

    addFinanceDetail: (state, action) => {
      const { key, value } = action.payload;
      state.finance[key] = value;
    },

    addNote: (state, action) => {
      const { key, value } = action.payload;

      state[key] = value;
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

      if (
        key === "address_1" ||
        key === "address_2" ||
        key === "city" ||
        key === "state"
      ) {
        try {
          yup
            .string()
            .required("is required.")
            .min(3, "must be at least 3 characters long.")
            .validateSync(value);
          state.error.billing_address[key] = null;
        } catch (err) {
          state.error.billing_address[key] = `${key} ${err.message}`;
        }
      } else if (key === "postal_code" || key === "quantity") {
        if (value === "") {
          state.error.billing_address[key] = `${key} is required.`;
        } else {
          state.error.billing_address[key] = null;
        }
      } else if (key === "phone" || key === "fax") {
        //phone and fax requires no validation.
        return;
      }
    },

    financeInfoValidation: (state, action) => {
      const { key, value } = action.payload;

      if (key === "payment_terms") {
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
      } else if (key === "credit_limit" || key === "available_credit") {
        if (value === "") {
          state.error[key] = `${key} is required.`;
        } else {
          state.error[key] = null;
        }
      } else if (key === "phone" || key === "fax") {
        //phone and fax requires no validation.
        return;
      }
    },

    managersInfoValidation: (state, action) => {
      const { key, value } = action.payload;

      if (key === "account_manager" || key === "customer_account_manager") {
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
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addDetail,
  addBillingDetail,
  addNote,
  generalInfoValidation,
  billingInfoValidation,
  addFinanceDetail,
  addManagersDetail,
  financeInfoValidation,
  managersInfoValidation,
} = createCustomerSlice.actions;

//writing it here instead of writing in the component:
export const customerDetails = (state) => state.createCustomer.customerDetails;
export const noteDetail = (state) => state.createCustomer.note_to_carrier;
export const financeDetails = (state) => state.createCustomer.finance;
export const managerDetails = (state) => state.createCustomer.managers;
export const billingDetails = (state) => state.createCustomer.billing_address;
export const getErrors = (state) => state.createCustomer.error;

export default createCustomerSlice.reducer;
