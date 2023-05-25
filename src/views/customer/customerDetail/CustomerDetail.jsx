import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { Box, Modal, Card, Stack, Typography } from "@mui/material";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

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
import {
  addErrors,
  removeAllErrors,
} from "../../../redux/slices/errorCustomerSlice";
import {
  createCustomer,
  customerDetailsById,
  updateCustomer,
  deleteCustomer,
  fetchCustomerById,
  setCustomerById,
} from "../../../redux/slices/customerSlice";
import { useNavigate, useParams } from "react-router-dom";

// yup schema:
const schema = yup.object().shape({
  customer: yup.string().required("Customer is requried."),
  status: yup.string().required("Status is requried."),
  name: yup.string().required("Name is requried."),
  email: yup
    .string()
    .required("Email is requried.")
    .email("Email should be valid."),
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
  const navigate = useNavigate();
  const { id } = useParams();
  const customerbyId = useSelector(customerDetailsById);
  const [isDeleteModal, setDeleteModal] = useState(false);

  const { register, handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  if (!customerbyId && id) {
    (async () => {
      try {
        const responseFromApi = await dispatch(fetchCustomerById(id)).unwrap();
        dispatch(setCustomerById(responseFromApi.data));
      } catch (errorFromApi) {
        console.log("error loading customer details");
      }
    })();
  }

  useEffect(() => {
    dispatch(removeAllErrors());
    if (id && customerbyId) {
      reset(customerbyId);
    }
  }, [dispatch, customerbyId]);

  const submitHandler = (data) => {
    // const formattedData = formatData(data);
    if (id) {
      // const jsonData = JSON.stringify(formattedData);
      dispatch(updateCustomer({ id, data }))
        .unwrap()
        .then((result) => navigate({ pathname: "/panel/customer" }))
        .catch((err) => console.log(err));
    } else {
      // const jsonData = JSON.stringify(formattedData);
      dispatch(createCustomer(data))
        .unwrap()
        .then((result) => navigate({ pathname: "/panel/customer" }))
        .catch((err) => console.log(err));
    }
  };

  // const formatData = (data) => {
  //   const clonedData = { ...data };
  //   const { phone, fax, credit_limit, available_credit, billing_address } =
  //     clonedData;

  //   const newPhone = phone
  //     .replaceAll(" ", "")
  //     .replaceAll("(", "")
  //     .replace(")", "")
  //     .replace("-", "");
  //   const newFax = fax
  //     .replaceAll(" ", "")
  //     .replaceAll("(", "")
  //     .replace(")", "")
  //     .replace("-", "");
  //   // const newCreditLimit = credit_limit.replaceAll(",", "");
  //   // const newAvailableCredit = available_credit.replaceAll(",", "");
  //   const newBillingPhone = billing_address.phone
  //     .replaceAll(" ", "")
  //     .replaceAll("(", "")
  //     .replaceAll(")", "")
  //     .replaceAll("-", "");
  //   // const newBillingQuantity = billing_address.quantity.replaceAll(",", "");

  //   clonedData.phone = newPhone;
  //   clonedData.fax = newFax;
  //   // clonedData.available_credit = newAvailableCredit;
  //   // clonedData.credit_limit = newCreditLimit;
  //   clonedData.billing_address.phone = newBillingPhone;
  //   // clonedData.billing_address.quantity = newBillingQuantity;
  //   return clonedData;
  // };

  const errorHandler = (errors) => {
    dispatch(addErrors(errors));
  };

  const deleteHandler = () => {
    setDeleteModal((preVal) => !preVal);
  };

  return (
    <Box width="100%" p={2}>
      <Stack spacing={2}>
        <CustomerHeaderCard>
          <StyledLabel>Customer</StyledLabel>
          <StyledInput fullWidth {...register("customer")} />
          {id ? (
            <CancelBtn sx={{ margin: "0 16px 0 0" }} onClick={deleteHandler}>
              delete
            </CancelBtn>
          ) : (
            <CancelBtn
              sx={{ margin: "0 16px 0 0" }}
              onClick={() => navigate({ pathname: "/panel/customer" })}
            >
              cancel
            </CancelBtn>
          )}
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

      <Modal
        open={isDeleteModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ p: 3, width: "550px" }}>
          <Stack direction="row" spacing={5}>
            <Box width="50px">
              <Box
                bgcolor="#FEE2E2"
                display="flex"
                width="50px"
                height="50px"
                borderRadius="50px"
                alignItems="center"
                justifyContent="center"
              >
                <WarningAmberRoundedIcon
                  sx={{
                    color: "#DC2626",
                    fontSize: "35px",
                    marginBottom: "5px",
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Typography variant="h6">Delete Customer</Typography>
              <Typography marginBottom={2}>
                Are you sure you want to delete customer? All of your data will
                be permanently removed from our servers forever. This action
                cannot be undone.
              </Typography>
              <Box display="flex" justifyContent="space-between" gap={2}>
                <CancelBtn
                  variant="contained"
                  fullWidth
                  sx={{ margin: 0 }}
                  onClick={() => setDeleteModal((preVal) => !preVal)}
                >
                  cancel
                </CancelBtn>
                <LoginBtn
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#DC2626",
                    margin: 0,
                    border: "none",
                    "&:hover": { border: "none" },
                  }}
                  onClick={() => {
                    dispatch(deleteCustomer(customerbyId.id));
                    navigate({ pathname: "/panel/customer" });
                  }}
                >
                  delete
                </LoginBtn>
              </Box>
            </Box>
          </Stack>
        </Card>
      </Modal>
    </Box>
  );
};

export default CustomerDetail;
