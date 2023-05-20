import { Paper, Stack, Typography } from "@mui/material";

import {
  CustomInput,
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
  customerDetails,
  billingDetails,
  getErrors,
} from "../../../../redux/slices/createCustomerSlice";

const BillingAddressCard = ({ children }) => {
  const dispatch = useDispatch();
  const customer = useSelector(billingDetails);

  const changeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    dispatch(addBillingDetail({ key, value }));
  };

  console.log(customer);
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
        <CustomInput labelSize={3}>
          <StyledLabel>Address 1</StyledLabel>
          <StyledInput
            fullWidth
            name="address_1"
            onChange={changeHandler}
            value={customer.address_1}
          />
        </CustomInput>

        {/* address-2 */}
        <CustomInput labelSize={3}>
          <StyledLabel>Address 2</StyledLabel>
          <StyledInput
            fullWidth
            name="address_2"
            onChange={changeHandler}
            value={customer.address_2 || ""}
          />
        </CustomInput>

        {/* city */}
        <CustomInput labelSize={3}>
          <StyledLabel>City</StyledLabel>
          <StyledInput
            fullWidth
            name="city"
            onChange={changeHandler}
            value={customer.city || ""}
          />
        </CustomInput>

        {/* state */}
        <CustomInput labelSize={3}>
          <StyledLabel>State</StyledLabel>
          <StyledInput
            fullWidth
            name="state"
            onChange={changeHandler}
            value={customer.state || ""}
          />
        </CustomInput>

        {/* postal card */}
        <CustomInput labelSize={3}>
          <StyledLabel>Postal Card</StyledLabel>
          <StyledInput
            fullWidth
            name="postal_card"
            onChange={changeHandler}
            value={customer.postal_card || ""}
          />
        </CustomInput>

        {/* quantity */}
        <CustomInput labelSize={3}>
          <StyledLabel>Quantity</StyledLabel>
          <StyledInput
            fullWidth
            name="quantity"
            onChange={changeHandler}
            value={customer.quantity || ""}
          />
        </CustomInput>

        {/* phone */}
        <CustomInput labelSize={3}>
          <StyledLabel>Phone</StyledLabel>
          <StyledInput
            fullWidth
            name="phone"
            onChange={changeHandler}
            inputComponent={TextMaskCustom}
            value={customer.phone || ""}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default BillingAddressCard;
