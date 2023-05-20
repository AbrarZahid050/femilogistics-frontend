import { Paper, Stack, Typography } from "@mui/material";

import CustomInput from "../../../carrier/components/InputFields/CustomInput";
import { StyledLabel } from "../../../../components/Styles/StyledBtns";

const ManagersCard = ({ children }) => {
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
        <CustomInput labelSize={4}>
          <StyledLabel>Account Manager</StyledLabel>
          {children[0]}
        </CustomInput>
        <CustomInput labelSize={4}>
          <StyledLabel>Customer Account Manager</StyledLabel>
          {children[1]}
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default ManagersCard;
