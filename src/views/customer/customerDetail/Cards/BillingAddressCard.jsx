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

import { Controller } from "react-hook-form";

//redux imports:
import { useSelector, useDispatch } from "react-redux";
import {
  getBillingInfoCardErrors,
  removeBillingInfoError,
} from "../../../../redux/slices/errorCustomerSlice";

const BillingAddressCard = ({ register, control }) => {
  const errors = useSelector(getBillingInfoCardErrors);
  const dispatch = useDispatch();

  const handlerForBlur = (event) => {
    const key = event.target.name;
    const newKey = key.replace("billing_address.", "");

    if (errors[newKey]) {
      dispatch(removeBillingInfoError(newKey));
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
          BILLING ADDRESS
        </Typography>

        {/* address-1 */}
        <CustomInput
          labelSize={3}
          isError={errors.address_1 ? errors.address_1.message : ""}
        >
          <StyledLabel>Address 1</StyledLabel>
          <StyledInput
            fullWidth
            {...register("billing_address.address_1")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        {/* address-2 */}
        <CustomInput
          labelSize={3}
          isError={errors.address_2 ? errors.address_2.message : ""}
        >
          <StyledLabel>Address 2</StyledLabel>
          <StyledInput
            fullWidth
            {...register("billing_address.address_2")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        {/* city */}
        <CustomInput
          labelSize={3}
          isError={errors.city ? errors.city.message : ""}
        >
          <StyledLabel>City</StyledLabel>
          <StyledInput
            fullWidth
            {...register("billing_address.city")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        {/* state */}
        <CustomInput
          labelSize={3}
          isError={errors.state ? errors.state.message : ""}
        >
          <StyledLabel>State</StyledLabel>
          <StyledInput
            fullWidth
            {...register("billing_address.state")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        {/* postal card */}
        <CustomInput
          labelSize={3}
          isError={errors.postal_code ? errors.postal_code.message : ""}
        >
          <StyledLabel>Postal Code</StyledLabel>
          <Controller
            name="billing_address.postal_code"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                fullWidth
                name="billing_address.postal_code"
                value={value || ""}
                onChange={onChange}
                onBlur={handlerForBlur}
                inputComponent={NumberMaskCustom}
              />
            )}
          ></Controller>
        </CustomInput>

        {/* quantity */}
        <CustomInput
          labelSize={3}
          isError={errors.quantity ? errors.quantity.message : ""}
        >
          <StyledLabel>Quantity</StyledLabel>
          <Controller
            name="billing_address.quantity"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                fullWidth
                name="billing_address.quantity"
                onBlur={handlerForBlur}
                value={value || ""}
                onChange={onChange}
                inputComponent={NumberMaskCustom}
              />
            )}
          />
        </CustomInput>

        {/* phone */}
        <CustomInput
          labelSize={3}
          isError={errors.phone ? errors.phone.message : ""}
        >
          <StyledLabel>Phone</StyledLabel>
          <Controller
            name="billing_address.phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                fullWidth
                name="billing_address.phone"
                onBlur={handlerForBlur}
                value={value || ""}
                onChange={onChange}
                inputComponent={TextMaskCustom}
              />
            )}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default BillingAddressCard;
