import {
  Paper,
  Grid,
  FormControl,
  Typography,
  Stack,
  RadioGroup,
} from "@mui/material";
import {
  StyledLabel,
  StyledInput,
  BpRadio,
  MyFormControlLabel,
  StyledSwitch,
} from "../../../../components/Styles/StyledBtns";

const Freight = () => {
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
      {/* main grid */}
      <Grid container columnSpacing={2}>
        {/* column 1 */}
        <Grid item xs={6}>
          <Stack spacing={0.5}>
            {/* heading */}
            <Typography fontSize="18px" fontWeight="500">
              Freight
            </Typography>

            {/* first input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Commodity</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Truck/Van/N/A" />
                </Grid>
              </Grid>
            </FormControl>

            {/* second input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Case</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Miami" />
                </Grid>
              </Grid>
            </FormControl>

            {/* third input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Mileage</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="John Doe" />
                </Grid>
              </Grid>
            </FormControl>

            {/* fourth input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Transportation</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Purus id pheretra" />
                </Grid>
              </Grid>
            </FormControl>

            {/* fifth input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Equip. Min</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Ut sit adipiscing id" />
                </Grid>
              </Grid>
            </FormControl>
          </Stack>
        </Grid>

        {/* column-2 */}
        <Grid item xs={6}>
          <Stack spacing={0.5}>
            {/* first input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Load Value</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Ut sit adipiscing id" />
                </Grid>
              </Grid>
            </FormControl>

            {/* second input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Weight</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Ut sit adipiscing id" />
                </Grid>
              </Grid>
            </FormControl>

            {/* third input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Refree Temp</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <StyledInput fullWidth value="Ut sit adipiscing id" />
                </Grid>
              </Grid>
            </FormControl>

            {/* fourth input */}
            <FormControl>
              <Grid container alignItems="center">
                <Grid item xs={3}>
                  <StyledLabel>Temperature</StyledLabel>
                </Grid>
                <Grid item xs={9}>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{ padding: "0 10px" }}
                  >
                    <MyFormControlLabel
                      sx={{
                        paddingRight: "20px",
                        borderRadius: "8px",
                      }}
                      value="F"
                      control={<BpRadio />}
                      label="F"
                    />
                    <MyFormControlLabel
                      sx={{
                        borderRadius: "8px",
                        paddingRight: "20px",
                      }}
                      value="C"
                      control={<BpRadio />}
                      label="C"
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </FormControl>

            {/* fifth input */}
            <FormControl>
              <Grid container alignItems="center" height="40px">
                <Grid item xs={3}>
                  <StyledLabel>Partial Vol</StyledLabel>
                </Grid>
                <Grid item xs={9} alignItems="center">
                  <StyledSwitch />
                </Grid>
              </Grid>
            </FormControl>

            {/* sixth input */}
            <FormControl>
              <Grid container alignItems="center" height="40px">
                <Grid item xs={3}>
                  <StyledLabel>Team Service</StyledLabel>
                </Grid>
                <Grid item xs={9} alignItems="center">
                  <StyledSwitch />
                </Grid>
              </Grid>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Freight;
