import { Paper, Stack, Typography } from "@mui/material";

import { CustomInput } from "../../../common/CustomInput/CustomInput";
import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

//redux:
import { useSelector, useDispatch } from "react-redux";
import {
  getManagerInfoCardErrors,
  removeManagerInfoError,
} from "../../../../redux/slices/errorCustomerSlice";

const ManagersCard = ({ register }) => {
  const errors = useSelector(getManagerInfoCardErrors);
  const dispatch = useDispatch();

  const handlerForBlur = (event) => {
    const key = event.target.name;
    if (errors[key]) {
      dispatch(removeManagerInfoError(key));
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
          MANAGERS
        </Typography>
        <CustomInput
          labelSize={4}
          isError={errors.account_manager ? errors.account_manager.message : ""}
        >
          <StyledLabel>Account Manager</StyledLabel>
          <StyledInput
            fullWidth
            {...register("account_manager")}
            onBlur={handlerForBlur}
          />
        </CustomInput>
        <CustomInput
          labelSize={4}
          isError={
            errors.customer_account_manager
              ? errors.customer_account_manager.message
              : ""
          }
        >
          <StyledLabel>Customer Account Manager</StyledLabel>
          <StyledInput
            fullWidth
            {...register("customer_account_manager")}
            onBlur={handlerForBlur}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default ManagersCard;
