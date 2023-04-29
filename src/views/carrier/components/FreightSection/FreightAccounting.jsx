import { Paper, Stack, Typography, FormControl } from "@mui/material";
import {
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";

const FreightAccounting = () => {
  return (
    <Paper
      sx={{
        marginLeft: 1,
        p: 2,
        height: "100%",
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
    >
      <Stack spacing={1}>
        <Typography fontWeight="bold">Accouting</Typography>
        <FormControl>
          <StyledLabel>AR Fee</StyledLabel>
          <StyledInput value="$00.00" dir="rtl" sx={{ p: 0 }} />
        </FormControl>
        <StyledLabel dir="rtl">Sub Total: $0.00</StyledLabel>
        <FormControl>
          <StyledLabel>AP Fee</StyledLabel>
          <StyledInput dir="rtl" value="$00.00" sx={{ p: 0 }} />
        </FormControl>
        <StyledLabel dir="rtl">Sub Total: $0.00</StyledLabel>
        <Stack direction="row" justifyContent="space-between">
          <Typography fontWeight="bold">Total</Typography>
          <Typography fontWeight="bold">Total: $0.00</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FreightAccounting;
