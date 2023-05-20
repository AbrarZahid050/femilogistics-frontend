import { useState } from "react";
import { Box, Stack } from "@mui/material";

import { grey } from "@mui/material/colors";

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
import { nanoid } from "@reduxjs/toolkit";
import FinanceCard from "./Cards/FinanceCard";
import NoteToCarrierCard from "./Cards/NoteToCarrierCard";

const CustomerDetail = () => {
  const [values, setValues] = useState({
    status: "ab",
    name: "",
    email: "",
    identifier: "",
    phone: "",
    fax: "",
    billing_address: {
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postal_code: "",
      phone: "",
      quantity: "",
    },
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Box width="100%" p={2}>
      <Stack spacing={2}>
        <CustomerHeaderCard>
          <StyledLabel>Customer</StyledLabel>
          <StyledInput fullWidth />
          <CancelBtn sx={{ margin: "0 16px 0 0" }}>delete</CancelBtn>
          <LoginBtn sx={{ m: 0 }}>save</LoginBtn>
        </CustomerHeaderCard>

        <Box display="flex" gap={2} flexWrap="wrap" justifyContent="stretch">
          <Box width="500px" height="420px">
            <GeneralInformationCard
              values={values}
              handleChange={(event) => handleChange(event)}
            />

            {/* <GeneralInformationCard>
              {["status", "name", "email", "identifier", "phone", "fax"].map(
                (label) => (
                  <StyledInput
                  fullWidth
                  value={values[label]}
                  onChange={handleChange}
                  name={label}
                  inputComponent={TextMaskCustom}
                    
                  />
                )
              )}
            </GeneralInformationCard> */}
          </Box>
          <Box width="500px">
            <BillingAddressCard>
              {[
                "address1",
                "address2",
                "city",
                "state",
                "postalCard",
                "quantity",
                "phone",
              ].map((label) => (
                <StyledInput key={nanoid()} fullWidth name={label} />
              ))}
            </BillingAddressCard>
          </Box>
          <Box width="500px">
            <ManagersCard>
              {["accountManager", "customerAccountManager"].map((label) => (
                <StyledInput key={nanoid()} fullWidth name={label} />
              ))}
            </ManagersCard>
          </Box>
          <Box width="500px">
            <FinanceCard>
              {["creditLimit", "paymentTerms", "availableCredit"].map(
                (label) => (
                  <StyledInput key={nanoid()} fullWidth name={label} />
                )
              )}
            </FinanceCard>
          </Box>
          <Box width="500px">
            <NoteToCarrierCard>
              <StyledInput fullWidth multiline rows={3} />
            </NoteToCarrierCard>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default CustomerDetail;
