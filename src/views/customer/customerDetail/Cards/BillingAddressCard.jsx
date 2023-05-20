import { Paper, Stack, Typography } from "@mui/material";

import {
  CustomInput,
  NumberMaskCustom,
  TextMaskCustom,
} from "../../../common/CustomInput/CustomInput";

import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

//redux imports:
import { useDispatch, useSelector } from "react-redux";
import {
  addBillingDetail,
  billingInfoValidation,
  billingDetails,
  getErrors,
} from "../../../../redux/slices/createCustomerSlice";

const BillingAddressCard = () => {
  const dispatch = useDispatch();
  const customer = useSelector(billingDetails);
  const errors = useSelector(getErrors);

  const changeHandler = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    dispatch(addBillingDetail({ key, value }));
  };

  const blurHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(billingInfoValidation({ key, value }));
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
          BILLING ADDRESS
        </Typography>

        {/* address-1 */}
        <CustomInput labelSize={3} isError={errors.billing_address.address_1}>
          <StyledLabel>Address 1</StyledLabel>
          <StyledInput
            fullWidth
            name="address_1"
            onChange={changeHandler}
            value={customer.address_1 || ""}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* address-2 */}
        <CustomInput labelSize={3} isError={errors.billing_address.address_2}>
          <StyledLabel>Address 2</StyledLabel>
          <StyledInput
            fullWidth
            name="address_2"
            onChange={changeHandler}
            value={customer.address_2 || ""}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* city */}
        <CustomInput labelSize={3} isError={errors.billing_address.city}>
          <StyledLabel>City</StyledLabel>
          <StyledInput
            fullWidth
            name="city"
            onChange={changeHandler}
            value={customer.city || ""}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* state */}
        <CustomInput labelSize={3} isError={errors.billing_address.state}>
          <StyledLabel>State</StyledLabel>
          <StyledInput
            fullWidth
            name="state"
            onChange={changeHandler}
            value={customer.state || ""}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* postal card */}
        <CustomInput labelSize={3} isError={errors.billing_address.postal_code}>
          <StyledLabel>Postal Code</StyledLabel>
          <StyledInput
            fullWidth
            name="postal_code"
            onChange={changeHandler}
            value={customer.postal_code || ""}
            inputComponent={NumberMaskCustom}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* quantity */}
        <CustomInput labelSize={3} isError={errors.billing_address.quantity}>
          <StyledLabel>Quantity</StyledLabel>
          <StyledInput
            fullWidth
            name="quantity"
            onChange={changeHandler}
            value={customer.quantity || ""}
            inputComponent={NumberMaskCustom}
            onBlur={blurHandler}
          />
        </CustomInput>

        {/* phone */}
        <CustomInput labelSize={3} isError={errors.billing_address.phone}>
          <StyledLabel>Phone</StyledLabel>
          <StyledInput
            fullWidth
            name="phone"
            onChange={changeHandler}
            inputComponent={TextMaskCustom}
            value={customer.phone || ""}
            onBlur={blurHandler}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default BillingAddressCard;
