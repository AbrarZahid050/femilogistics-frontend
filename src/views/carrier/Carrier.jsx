import {
  Paper,
  Box,
  Grid,
  Stack,
  Button,
  Typography,
  FormControl,
  RadioGroup,
} from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import {
  StyledInput,
  StyledLabel,
  BpRadio,
  MyFormControlLabel,
  StyledSwitch,
} from "../../components/Styles/StyledBtns";

const Carrier = () => {
  return (
    <Box sx={{ width: "100%", padding: 1, background: "#F9F9F9" }}>
      <Stack spacing={2}>
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
                  sx={{ color: blue.A400, width: "180px" }}
                />
              </Stack>

              <Stack spacing={1} direction="row" alignItems="center">
                <StyledLabel>Status</StyledLabel>
                <StyledInput
                  value="Available"
                  readOnly
                  sx={{ width: "150px" }}
                />
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
              <Button
                variant="contained"
                sx={{
                  background: indigo[900],
                  fontSize: "15px",
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
                  fontSize: "15px",
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
                  fontSize: "15px",
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

        <Paper sx={{ p: 2 }}>
          {/* main grid */}
          <Grid container columnSpacing={2}>
            {/* column 1 */}
            <Grid item xs={6}>
              <Stack spacing={0.5}>
                {/* heading */}
                <Typography fontSize="18px" fontWeight="500">
                  Feight
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
      </Stack>
    </Box>
  );
};

export default Carrier;
