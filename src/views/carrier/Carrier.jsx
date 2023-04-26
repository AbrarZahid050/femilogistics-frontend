import { Paper, Box, Grid, Stack, Button } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import { StyledInput, StyledLabel } from "../../components/Styles/StyledBtns";

const Carrier = () => {
  return (
    <Box sx={{ width: "100%", padding: 1 }}>
      <Paper sx={{ width: "100%", p: 2 }} elevation={6}>
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
                sx={{ color: blue.A400, width: "130px" }}
              />
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center">
              <StyledLabel>Status</StyledLabel>
              <StyledInput value="Available" readOnly sx={{ width: "100px" }} />
            </Stack>

            <Stack spacing={1} direction="row" alignItems="center">
              <StyledLabel>Assinged To</StyledLabel>
              <StyledInput
                value="Guest Account"
                readOnly
                sx={{ width: "120px" }}
              />
            </Stack>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              sx={{
                background: indigo[900],
                fontSize: "12px",
                height: "30px",
                borderRadius: "7px",
              }}
            >
              AR
            </Button>

            <Button
              variant="contained"
              sx={{
                background: indigo[900],
                fontSize: "12px",
                height: "30px",
                borderRadius: "7px",
                marginLeft: 2,
              }}
            >
              AP
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "#0062FF",
                fontSize: "12px",
                height: "30px",
                borderRadius: "7px",
                marginLeft: 2,
                width: "200px",
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Carrier;
