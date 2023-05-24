import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  generalInfoErrors: {},
  billingAddressErrors: {},
  managerErrors: {},
  financeErrors: {},
  noteToCarrierErrors: {},
};

export const errorCustomerSlice = createSlice({
  name: "createCustomerSlice",
  initialState,
  reducers: {
    addErrors: (state, action) => {
      const {
        status,
        name,
        email,
        identifier,
        phone,
        fax,
        billing_address,
        account_manager,
        customer_account_manager,
        credit_limit,
        payment_terms,
        available_credit,
        note_to_carrier,
      } = action.payload;
      state.generalInfoErrors = { status, name, email, identifier, phone, fax };
      state.billingAddressErrors = { ...billing_address };
      state.financeErrors = { credit_limit, payment_terms, available_credit };
      state.managerErrors = { account_manager, customer_account_manager };
      state.noteToCarrierErrors = { note_to_carrier };
    },

    removeGeneralInfoError: (state, action) => {
      state.generalInfoErrors[action.payload] = null;
    },

    removeBillingInfoError: (state, action) => {
      state.billingAddressErrors[action.payload] = null;
    },

    removeFinanceInfoError: (state, action) => {
      state.financeErrors[action.payload] = null;
    },

    removeManagerInfoError: (state, action) => {
      state.managerErrors[action.payload] = null;
    },

    removeNoteInfoError: (state, action) => {
      state.noteToCarrierErrors[action.payload] = null;
    },

    removeAllErrors: (state, action) => {
      state.generalInfoErrors = {};
      state.billingAddressErrors = {};
      state.financeErrors = {};
      state.managerErrors = {};
      state.noteToCarrierErrors = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addErrors,
  removeGeneralInfoError,
  removeBillingInfoError,
  removeFinanceInfoError,
  removeManagerInfoError,
  removeNoteInfoError,
  removeAllErrors,
} = errorCustomerSlice.actions;

//writing it here instead of writing in the component:
export const getGeneralInfoCardErrors = (state) =>
  state.errorCustomer.generalInfoErrors;
export const getBillingInfoCardErrors = (state) =>
  state.errorCustomer.billingAddressErrors;
export const getFinanceInfoCardErrors = (state) =>
  state.errorCustomer.financeErrors;
export const getManagerInfoCardErrors = (state) =>
  state.errorCustomer.managerErrors;
export const getNoteInfoCardErrors = (state) =>
  state.errorCustomer.noteToCarrierErrors;

export default errorCustomerSlice.reducer;
