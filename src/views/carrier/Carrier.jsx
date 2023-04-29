import { useState } from "react";
import {
  Paper,
  Box,
  Grid,
  Stack,
  Button,
  Typography,
  IconButton,
  FormControl,
  Tooltip,
} from "@mui/material";
import { blue, indigo, grey } from "@mui/material/colors";
import { StyledInput, StyledLabel } from "../../components/Styles/StyledBtns";
import Summary from "./components/Accordion/Summary";
import { ReactComponent as ExpandMore } from "../../assets/New Load Page/downArrow.svg";
import { ReactComponent as ExpandLess } from "../../assets/New Load Page/Path 4.svg";
import { ReactComponent as CrossIcon } from "../../assets/New Load Page/cross.svg";
import CustomInput from "./components/InputFields/CustomInput";
import FreightAccounting from "./components/FreightSection/FreightAccounting";
import Freight from "./components/FreightSection/Freight";

const Carrier = () => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand((preVal) => !preVal);
  };

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

        <Grid container>
          {expand ? (
            <>
              <Grid item xs={9}>
                <Freight />
              </Grid>

              <Grid item xs={3}>
                <FreightAccounting />
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Freight />
            </Grid>
          )}
        </Grid>

        <Box>
          <Button
            variant="contained"
            sx={{
              background: indigo[900],
              fontSize: "15px",
              height: "30px",
              borderRadius: "7px",
            }}
          >
            Add Carrier
          </Button>
        </Box>

        <Paper
          elevation={0}
          sx={
            expand
              ? { p: 2, background: grey[200] }
              : {
                  p: 2,
                  background: "#FFFFFF",
                  boxShadow:
                    "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                  borderRadius: "8px",
                }
          }
        >
          <Stack direction="column" spacing={2}>
            {/* Accordion summary */}
            <Box display="flex" justifyContent="space-between" height="30px">
              {expand ? (
                <Box display="inline-flex" alignItems="center">
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      background: indigo[900],
                      fontSize: "15px",
                      height: "30px",
                      borderRadius: "7px",
                      marginRight: 2,
                    }}
                  >
                    - Remove Carrier
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: indigo[900],
                      fontSize: "15px",
                      height: "30px",
                      borderRadius: "7px",
                    }}
                  >
                    Rate Confirmation
                  </Button>
                </Box>
              ) : (
                <>
                  <Summary
                    title="Carrier"
                    detail="ASAP TRANS CORP (38243) Homeglen, IL"
                  />
                  <Summary title="Dispatch" detail="Truck 320" />
                  <Summary title="Accounting" detail="Total: $2120.00" />
                </>
              )}

              <IconButton
                onClick={handleClick}
                sx={{ height: "30px", width: "30px" }}
              >
                {expand ? (
                  <ExpandLess fontSize={25} />
                ) : (
                  <ExpandMore fontSize={25} />
                )}
              </IconButton>
            </Box>

            {/* Accordion detail */}
            {expand ? (
              // main-container
              <Box width="100%" display="flex" gap={2} flexWrap="wrap">
                {/* card-1 */}
                <Box width="530px">
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h6" fontSize="18px">
                        Freight
                      </Typography>

                      {/* 1st input */}
                      <CustomInput>
                        <StyledLabel>Search</StyledLabel>
                        <StyledInput fullWidth multiline rows={2} />
                      </CustomInput>

                      {/* 2nd input */}
                      <CustomInput>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>
                      {/* 3rd input */}
                      <CustomInput>
                        <StyledLabel>Insurance</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 4th input */}
                      <CustomInput>
                        <StyledLabel>Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 5th input */}
                      <CustomInput>
                        <StyledLabel>Fax</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 6th input */}
                      <CustomInput>
                        <StyledLabel>Pro</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 7th input */}
                      <CustomInput>
                        <StyledLabel>RC Note</StyledLabel>
                        <StyledInput fullWidth multiline rows={3} />
                      </CustomInput>
                    </Stack>
                  </Paper>
                </Box>

                {/* card-2 */}
                <Box width="530px">
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack spacing={1}>
                      {/* heading */}
                      <Typography variant="h6" fontSize="18px">
                        Dispatch
                      </Typography>

                      {/* 1st input */}
                      <CustomInput>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 2nd input */}
                      <CustomInput>
                        <StyledLabel>Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>
                      {/* 3rd input */}
                      <CustomInput>
                        <StyledLabel>Email</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 4th input */}
                      <CustomInput>
                        <StyledLabel>After hours Name</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 5th input */}
                      <CustomInput>
                        <StyledLabel>After hours Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 6th input */}
                      <CustomInput>
                        <StyledLabel>Comment</StyledLabel>
                        <StyledInput fullWidth multiline rows={3} />
                      </CustomInput>
                    </Stack>
                  </Paper>
                </Box>

                {/* card-3 */}
                <Box width="530px">
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack spacing={1}>
                      <Typography variant="h6" fontSize="18px">
                        Accouting
                      </Typography>
                      <FormControl>
                        <StyledLabel>AP Fee</StyledLabel>
                        <StyledInput dir="rtl" value="$00.00" sx={{ p: 0 }} />
                      </FormControl>
                      <StyledLabel dir="rtl">Sub Total: $0.00</StyledLabel>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography fontWeight="bold">Total</Typography>
                        <Typography fontWeight="bold">Total: $30.00</Typography>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>

                {/* card-4 */}
                <Box width="803px">
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack spacing={1}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="h6" fontSize="18px">
                          Driver
                        </Typography>
                        <Tooltip title="Close">
                          <IconButton>
                            <CrossIcon />
                          </IconButton>
                        </Tooltip>
                      </Stack>

                      {/* 1st input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 2nd input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Mobile Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 3rd input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Alternate Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 4th input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Location</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 5th input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Palets</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 6th input */}
                      <Box width="100%">
                        <Grid container>
                          <Grid item xs={6}>
                            <CustomInput labelSize={6}>
                              <StyledLabel>Tractor</StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                          <Grid item xs={6}>
                            <CustomInput labelSize={4}>
                              <StyledLabel sx={{ paddingLeft: 5 }}>
                                Trailer
                              </StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* 7th input */}
                      <Box width="100%">
                        <Grid container>
                          <Grid item xs={6}>
                            <CustomInput labelSize={6}>
                              <StyledLabel>Equipment</StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                          <Grid item xs={6}>
                            <CustomInput labelSize={4}>
                              <StyledLabel sx={{ paddingLeft: 5 }}>
                                Equip Size
                              </StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                        </Grid>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>

                {/* card-5 */}
                <Box width="803px">
                  <Paper
                    sx={{
                      p: 2,
                      height: "100%",
                      background: "#FFFFFF",
                      boxShadow:
                        "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                      borderRadius: "8px",
                    }}
                  >
                    <Stack spacing={1}>
                      <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="h6" fontSize="18px">
                          Driver
                        </Typography>
                        <IconButton>
                          <CrossIcon />
                        </IconButton>
                      </Stack>

                      {/* 1st input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 2nd input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Mobile Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 3rd input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Alternate Phone</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 4th input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Location</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 5th input */}
                      <CustomInput labelSize={3}>
                        <StyledLabel>Palets</StyledLabel>
                        <StyledInput fullWidth />
                      </CustomInput>

                      {/* 6th input */}
                      <Box width="100%">
                        <Grid container>
                          <Grid item xs={6}>
                            <CustomInput labelSize={6}>
                              <StyledLabel>Tractor</StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                          <Grid item xs={6}>
                            <CustomInput labelSize={4}>
                              <StyledLabel sx={{ paddingLeft: 5 }}>
                                Trailer
                              </StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                        </Grid>
                      </Box>

                      {/* 7th input */}
                      <Box width="100%">
                        <Grid container>
                          <Grid item xs={6}>
                            <CustomInput labelSize={6}>
                              <StyledLabel>Equipment</StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                          <Grid item xs={6}>
                            <CustomInput labelSize={4}>
                              <StyledLabel sx={{ paddingLeft: 5 }}>
                                Equip Size
                              </StyledLabel>
                              <StyledInput fullWidth />
                            </CustomInput>
                          </Grid>
                        </Grid>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              </Box>
            ) : null}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
};

export default Carrier;
