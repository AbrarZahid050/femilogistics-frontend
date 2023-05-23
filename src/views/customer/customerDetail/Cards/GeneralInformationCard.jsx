import { Paper, Stack, Typography } from "@mui/material";

import {
  CustomInput,
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
  getGeneralInfoCardErrors,
  removeGeneralInfoError,
} from "../../../../redux/slices/errorCustomerSlice";

const GeneralInformationCard = ({ register, control }) => {
  const dispatch = useDispatch();
  const errors = useSelector(getGeneralInfoCardErrors);

  const handlerForBlur = (event) => {
    const key = event.target.name;

    if (errors[key]) {
      dispatch(removeGeneralInfoError(key));
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
          GENERAL INFORMATION
        </Typography>

        {/* Status intput */}
        <CustomInput
          labelSize={3}
          isError={errors.status ? errors.status.message : ""}
        >
          <StyledLabel>Status</StyledLabel>
          <StyledInput
            fullWidth
            {...register("status")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.name ? errors.name.message : ""}
        >
          <StyledLabel>Name</StyledLabel>
          <StyledInput
            fullWidth
            {...register("name")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.email ? errors.email.message : ""}
        >
          <StyledLabel>Email</StyledLabel>
          <StyledInput
            fullWidth
            {...register("email")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.identifier ? errors.identifier.message : ""}
        >
          <StyledLabel>Identifier</StyledLabel>
          <StyledInput
            fullWidth
            {...register("identifier")}
            onBlur={handlerForBlur}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.phone ? errors.phone.message : ""}
        >
          <StyledLabel>Phone</StyledLabel>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                fullWidth
                name="phone"
                onBlur={handlerForBlur}
                value={value || ""}
                onChange={onChange}
                inputComponent={TextMaskCustom}
              />
            )}
          />
        </CustomInput>

        <CustomInput
          labelSize={3}
          isError={errors.fax ? errors.fax.message : ""}
        >
          <StyledLabel>Fax</StyledLabel>
          <Controller
            name="fax"
            control={control}
            render={({ field: { onChange, value } }) => (
              <StyledInput
                name="fax"
                fullWidth
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

export default GeneralInformationCard;
