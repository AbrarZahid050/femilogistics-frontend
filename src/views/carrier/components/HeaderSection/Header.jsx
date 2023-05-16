import { Paper, Grid, Stack } from "@mui/material";
import {
  StyledInput,
  StyledLabel,
  GeneralBtn1,
  GeneralBtn2,
} from "../../../../components/Styles/StyledBtns";
import { blue } from "@mui/material/colors";

const Header = () => {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
      elevation={6}
    >
      <Grid
        container
        rowSpacing={2}
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Grid item display="inline-flex" gap={2}>
          <Stack spacing={1} direction="row" alignItems="center">
            <StyledLabel>Customer</StyledLabel>
            <StyledInput
              value="Customer Name"
              readOnly
              sx={{
                color: blue.A400,
                width: "180px",
              }}
            />
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center">
            <StyledLabel>Status</StyledLabel>
            <StyledInput value="Available" readOnly sx={{ width: "150px" }} />
          </Stack>

          <Stack spacing={1} direction="row" alignItems="center">
            <StyledLabel>Assinged To</StyledLabel>
            <StyledInput
              value="Guest Account"
              readOnly
              sx={{ width: "150px" }}
            />
          </Stack>
        </Grid>

        <Grid item>
          <Stack direction="row" spacing={2}>
            <GeneralBtn1 variant="contained">AR</GeneralBtn1>
            <GeneralBtn2 variant="contained" sx={{ width: "200px" }}>
              Submit
            </GeneralBtn2>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
