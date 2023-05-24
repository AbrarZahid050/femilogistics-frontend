import { InputAdornment, Paper, Stack, Typography } from "@mui/material";

import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

import {
  CustomInput,
  NumberMaskCustom,
} from "../../../common/CustomInput/CustomInput";
import { Controller } from "react-hook-form";

//redux import:
import { useSelector, useDispatch } from "react-redux";
import {
  getFinanceInfoCardErrors,
  removeFinanceInfoError,
} from "../../../../redux/slices/errorCustomerSlice";

const FinanceCard = ({ register, control }) => {
  const errors = useSelector(getFinanceInfoCardErrors);
  const dispatch = useDispatch();

  const handlerForBlur = (event) => {
    const key = event.target.name;
    if (errors[key]) {
      dispatch(removeFinanceInfoError(key));
    }
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
        <CustomInput
          labelSize={3}
          isError={errors.credit_limit ? errors.credit_limit.message : ""}
        >
          <StyledLabel>Credit Limit</StyledLabel>
          <Controller
            name="credit_limit"
            control={control}
            render={({ field: { value, onChange } }) => (
              <StyledInput
                fullWidth
                name="credit_limit"
                onBlur={handlerForBlur}
                value={value || ""}
                onChange={onChange}
                inputComponent={NumberMaskCustom}
                startAdornment={
                  <InputAdornment position="start">
                    <p>$</p>
                  </InputAdornment>
                }
              />
            )}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.payment_terms ? errors.payment_terms.message : ""}
        >
          <StyledLabel>Payment Terms</StyledLabel>
          <StyledInput
            fullWidth
            {...register("payment_terms")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={
            errors.available_credit ? errors.available_credit.message : ""
          }
        >
          <StyledLabel>Available Credit</StyledLabel>
          <Controller
            name="available_credit"
            control={control}
            render={({ field: { value, onChange } }) => (
              <StyledInput
                fullWidth
                name="available_credit"
                onBlur={handlerForBlur}
                value={value || ""}
                onChange={onChange}
                inputComponent={NumberMaskCustom}
                startAdornment={
                  <InputAdornment position="start">
                    <p>$</p>
                  </InputAdornment>
                }
              />
            )}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default FinanceCard;
