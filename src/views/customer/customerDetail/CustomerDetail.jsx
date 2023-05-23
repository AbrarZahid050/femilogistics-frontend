import { useForm } from "react-hook-form";

import { Box, Stack } from "@mui/material";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  CancelBtn,
  LoginBtn,
  StyledInput,
  StyledLabel,
} from "../../../components/Styles/StyledBtns";
import CustomerHeaderCard from "./CustomerHeaderCard";
import GeneralInformationCard from "./Cards/GeneralInformationCard";
import BillingAddressCard from "./Cards/BillingAddressCard";
import ManagersCard from "./Cards/ManagersCard";
import FinanceCard from "./Cards/FinanceCard";
import NoteToCarrierCard from "./Cards/NoteToCarrierCard";

//redux import:
import { useDispatch, useSelector } from "react-redux";
import { addErrors } from "../../../redux/slices/errorCustomerSlice";
import {
  customerDetailsById,
  getCustomerById,
} from "../../../redux/slices/customerSlice";

//react-router-dom:
import { useParams } from "react-router-dom";
import { useEffect } from "react";

//yup schema:
const schema = yup.object().shape({
  customer: yup.string().required("Customer is requried."),
  status: yup.string().required("Status is requried."),
  name: yup.string().required("Name is requried."),
  email: yup.string().required("Email is requried."),
  identifier: yup.string().required("Identifier is requried."),
  phone: yup.string().required("Phone is requried."),
  fax: yup.string().required("Fax is requried."),
  billing_address: yup.object().shape({
    address_1: yup.string().required("Address 1 is required."),
    address_2: yup.string().required("Address 2 is required."),
    city: yup.string().required("City is required."),
    state: yup.string().required("State is required."),
    postal_code: yup.string().required("Postal code is required."),
    quantity: yup.string().required("Quantity is required."),
    phone: yup.string().required("Phone is required."),
  }),
  account_manager: yup.string().required("Account manager is required."),
  customer_account_manager: yup
    .string()
    .required("Customer account manager is required."),
  credit_limit: yup.string().required("Credit limit is required."),
  payment_terms: yup.string().required("Payment terms is required."),
  available_credit: yup.string().required("Available credit is required."),
  // note_to_carrier: yup.string().required("Note is required."),
});

const CustomerDetail = () => {
  const dispatch = useDispatch();

  const customerbyId = useSelector(customerDetailsById);

  const { register, handleSubmit, control } = useForm({
    defaultValues: customerbyId,
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  const errorHandler = (errors) => {
    dispatch(addErrors(errors));
  };

  console.log("parent rendering...", customerbyId);
  return (
    <Box width="100%" p={2}>
      <Stack spacing={2}>
        <CustomerHeaderCard>
          <StyledLabel>Customer</StyledLabel>
          <StyledInput fullWidth {...register("customer")} />
          <CancelBtn sx={{ margin: "0 16px 0 0" }}>delete</CancelBtn>
          <LoginBtn
            sx={{ m: 0 }}
            onClick={handleSubmit(submitHandler, errorHandler)}
          >
            save
          </LoginBtn>
        </CustomerHeaderCard>
        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="stretch">
          <Box width="500px" height="420px">
            <GeneralInformationCard register={register} control={control} />
          </Box>
          <Box width="500px">
            <BillingAddressCard register={register} control={control} />
          </Box>
          <Box width="500px">
            <ManagersCard register={register} />
          </Box>
          <Box width="500px">
            <FinanceCard register={register} control={control} />
          </Box>
          <Box width="500px">
            <NoteToCarrierCard register={register} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomerDetail;
