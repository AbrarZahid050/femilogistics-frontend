import { Paper, Stack, Typography } from "@mui/material";

import CustomInput from "../../../carrier/components/InputFields/CustomInput";
import { StyledLabel } from "../../../../components/Styles/StyledBtns";

const FinanceCard = ({ children }) => {
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
        <CustomInput labelSize={3}>
          <StyledLabel>Credit Limit</StyledLabel>
          {children[0]}
        </CustomInput>
        <CustomInput labelSize={3}>
          <StyledLabel>Payment Terms</StyledLabel>
          {children[1]}
        </CustomInput>
        <CustomInput labelSize={3}>
          <StyledLabel>Available Credit</StyledLabel>
          {children[2]}
        </CustomInput>
      </Stack>
    </Paper>
  );
};

export default FinanceCard;
