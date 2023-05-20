import { Paper, Stack, Typography } from "@mui/material";

import {
  CustomInput,
  TextMaskCustom,
} from "../../../common/CustomInput/CustomInput";

import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

//redux-toolkit imports:
import { useSelector, useDispatch } from "react-redux";

import {
  addDetail,
  customerDetails,
  generalInfoValidation,
  getErrors,
} from "../../../../redux/slices/createCustomerSlice";

//to formate the phone numbers:

const GeneralInformationCard = () => {
  const dispatch = useDispatch();
  const customer = useSelector(customerDetails);
  const errors = useSelector(getErrors);

  const changeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(addDetail({ key, value }));
  };

  const blurHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(generalInfoValidation({ key, value }));
  };

  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h6" fontSize="18px">
          GENERAL INFORMATION
        </Typography>

        {/* Status intput */}
        <CustomInput labelSize={3} isError={errors.status}>
          <StyledLabel>Status</StyledLabel>
          <StyledInput
            fullWidth
            name="status"
            value={customer.status || ""}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>

        <CustomInput labelSize={3} isError={errors.name}>
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            fullWidth
            name="name"
            value={customer.name || ""}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>

        <CustomInput labelSize={3} isError={errors.email}>
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            fullWidth
            name="email"
            value={customer.email || ""}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>

        <CustomInput labelSize={3} isError={errors.identifier}>
          <StyledLabel>Identifier</StyledLabel>
          <StyledInput
            fullWidth
            name="identifier"
            value={customer.identifier || ""}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>

        <CustomInput labelSize={3}>
          <StyledLabel>Phone</StyledLabel>
          <StyledInput
            fullWidth
            value={customer.phone || ""}
            name="phone"
            inputComponent={TextMaskCustom}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>

        <CustomInput labelSize={3}>
          <StyledLabel>Fax</StyledLabel>
          <StyledInput
            fullWidth
            value={customer.fax || ""}
            name="fax"
            inputComponent={TextMaskCustom}
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default GeneralInformationCard;
