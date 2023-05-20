import { Paper, Stack, Typography } from "@mui/material";

import { CustomInput } from "../../../common/CustomInput/CustomInput";
import {
  StyledLabel,
  StyledInput,
} from "../../../../components/Styles/StyledBtns";

import { useDispatch, useSelector } from "react-redux";
import {
  managerDetails,
  getErrors,
  addManagersDetail,
  managersInfoValidation,
} from "../../../../redux/slices/createCustomerSlice";

const ManagersCard = () => {
  const dispatch = useDispatch();
  const customer = useSelector(managerDetails);
  const errors = useSelector(getErrors);

  const changeHandler = (event) => {
    const key = event.target.name;
    let value = event.target.value;

    dispatch(addManagersDetail({ key, value }));
  };

  const blurHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(managersInfoValidation({ key, value }));
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
        <CustomInput labelSize={4} isError={errors.account_manager}>
          <StyledLabel>Account Manager</StyledLabel>
          <StyledInput
            name="account_manager"
            fullWidth
            onChange={changeHandler}
            value={customer.account_manager || ""}
            onBlur={blurHandler}
          />
        </CustomInput>
        <CustomInput labelSize={4} isError={errors.customer_account_manager}>
          <StyledLabel>Customer Account Manager</StyledLabel>
          <StyledInput
            name="customer_account_manager"
            fullWidth
            onChange={changeHandler}
            value={customer.customer_account_manager || ""}
            onBlur={blurHandler}
          />
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default ManagersCard;
