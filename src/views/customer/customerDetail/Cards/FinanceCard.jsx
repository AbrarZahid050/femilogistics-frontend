import { InputAdornment, Paper, Stack, Typography } from "@mui/material";

import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

import {
  CustomInput,
  NumberMaskCustom,
} from "../../../common/CustomInput/CustomInput";

import { useDispatch, useSelector } from "react-redux";
import {
  addFinanceDetail,
  financeInfoValidation,
  getErrors,
  financeDetails,
} from "../../../../redux/slices/createCustomerSlice";

const FinanceCard = () => {
  const dispatch = useDispatch();
  const customer = useSelector(financeDetails);
  const errors = useSelector(getErrors);

  const changeHandler = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    dispatch(addFinanceDetail({ key, value }));
  };

  const blurHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(financeInfoValidation({ key, value }));
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
          FINANCE
        </Typography>
        <CustomInput labelSize={3} isError={errors.credit_limit}>
          <StyledLabel>Credit Limit</StyledLabel>
          <StyledInput
            fullWidth
            name="credit_limit"
            onChange={changeHandler}
            value={customer.credit_limit || ""}
            onBlur={blurHandler}
            inputComponent={NumberMaskCustom}
            startAdornment={
              <InputAdornment position="start">
                <p>$</p>
              </InputAdornment>
            }
          />
        </CustomInput>
        <CustomInput labelSize={3} isError={errors.payment_terms}>
          <StyledLabel>Payment Terms</StyledLabel>
          <StyledInput
            name="payment_terms"
            fullWidth
            onChange={changeHandler}
            value={customer.payment_terms || ""}
            onBlur={blurHandler}
          />
        </CustomInput>
        <CustomInput labelSize={3} isError={errors.available_credit}>
          <StyledLabel>Available Credit</StyledLabel>
          <StyledInput
            name="available_credit"
            fullWidth
            onChange={changeHandler}
            value={customer.available_credit || ""}
            onBlur={blurHandler}
            inputComponent={NumberMaskCustom}
            startAdornment={
              <InputAdornment position="start">
                <p>$</p>
              </InputAdornment>
            }
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default FinanceCard;
