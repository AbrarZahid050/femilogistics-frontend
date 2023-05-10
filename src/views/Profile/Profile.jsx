import {
  Box,
  Paper,
  Avatar,
  Stack,
  Typography,
  Grid,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import CustomInput from "../carrier/components/InputFields/CustomInput";
import {
  CancelBtn,
  LoginBtn,
  StyledInput,
  StyledLabel,
} from "../../components/Styles/StyledBtns";
import { ReactComponent as SelectArrows } from "../../assets/Users/selectArrows.svg";
import ProfilePic from "../../assets/NavbarImages/avatar.jpg";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Profile = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper elevation={6}>
        <Box p={3} width="500px" display="flex" flexDirection="column" gap={2}>
          {/* paper 1 */}
          <Box>
            <Paper variant="outlined">
              <Stack p={2} direction="row" alignItems="center" spacing={2}>
                {/* 1# picture */}
                <Avatar
                  alt="profile pic"
                  src={ProfilePic}
                  sx={{ width: "50px", height: "50px" }}
                />

                {/* 2# name & availability */}
                <Box>
                  <Typography variant="h6">James Wright</Typography>
                  <Typography>Available 3 weeks a month.</Typography>
                </Box>
              </Stack>
            </Paper>
          </Box>

          <Box>
            {/* paper 2 */}
            <Paper variant="outlined">
              <Stack p={2} spacing={1}>
                {/* name input-field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Name</StyledLabel>
                  <StyledInput fullWidth value="James Wright" />
                </CustomInput>

                {/* email input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Email</StyledLabel>
                  <StyledInput fullWidth value="example@gmail.com" />
                </CustomInput>

                {/* address input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Address</StyledLabel>
                  <StyledInput fullWidth placeholder="placeholder" />
                </CustomInput>

                {/* city input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>City</StyledLabel>
                  <StyledInput fullWidth value="Miami" />
                </CustomInput>

                {/* state & zip code input field */}
                <Box width="100%">
                  <Grid container>
                    <Grid item xs={8}>
                      <CustomInput labelSize={6}>
                        <StyledLabel>State</StyledLabel>
                        <StyledInput fullWidth value="Florida" />
                      </CustomInput>
                    </Grid>
                    <Grid item xs={4}>
                      <CustomInput labelSize={3}>
                        <StyledLabel sx={{ paddingLeft: 1 }}>Zip</StyledLabel>
                        <StyledInput fullWidth value="00012" />
                      </CustomInput>
                    </Grid>
                  </Grid>
                </Box>

                {/* city input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Country</StyledLabel>
                  <Select
                    labelId="country-select-dropdown"
                    id="country-select-dropdown"
                    label="country"
                    onChange
                    name="country"
                    input={<StyledInput fullWidth />}
                    MenuProps={MenuProps}
                    IconComponent={() => {
                      return (
                        <IconButton>
                          <SelectArrows />
                        </IconButton>
                      );
                    }}
                  >
                    <MenuItem value={1}>US</MenuItem>
                    <MenuItem value={2}>UK</MenuItem>
                    <MenuItem value={3}>Japan</MenuItem>
                    <MenuItem value={4}>Germany</MenuItem>
                    <MenuItem value={5}>France</MenuItem>
                    <MenuItem value={5}>Others</MenuItem>
                  </Select>
                </CustomInput>
              </Stack>
            </Paper>
          </Box>

          <Stack>
            <LoginBtn sx={{ marginBottom: 0 }}>confirm</LoginBtn>
            <CancelBtn sx={{ marginBottom: 0 }}>cancel</CancelBtn>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
