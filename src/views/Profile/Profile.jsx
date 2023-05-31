import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ProfilePic from "../../assets/NavbarImages/avatar.jpg";
import { ReactComponent as SelectArrows } from "../../assets/Users/selectArrows.svg";
import {
  CancelBtn,
  LoginBtn,
  StyledInput,
  StyledLabel,
} from "../../components/Styles/StyledBtns";
import { fetchProfile } from "../../redux/slices/profileSlice";
import CustomInput from "../carrier/components/InputFields/CustomInput";
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
  const dispatch = useDispatch()
  const [values, setValues] = useState({
    userName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: ""
  });
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("");
  const handleFileSelect = (e) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const inputChangeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = async () => {
    const userData = {
      userName: values.userName,
      email: values.email,
      address: values.address,
      city: values.city,
      state: values.state,
      zip: values.zip,
      country: values.country,
      image:imageSrc?imageSrc:""
    };

    // const data = JSON.stringify(userData);
    // dispatch(createProfile(data));
  };


  useEffect(()=>{
    dispatch(fetchProfile())
  },[])


  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper elevation={1}>
        <Box p={3} width="500px" display="flex" flexDirection="column" gap={2}>
          {/* paper 1 */}
          <Box>
            <Paper variant="outlined">
              <Stack
                px={0}
                py={2}
                direction="row"
                alignItems="center"
                spacing={2}
              >
                {/* 1# picture */}
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelect}
                />
                <Box sx={{ position: "relative" }}>
                  {imageSrc ? (
                    <Avatar
                      alt="profile pic"
                      src={imageSrc}
                      sx={{ width: "50px", height: "50px" }}
                    />
                  ) : (
                    <Avatar
                      alt="profile pic"
                      src={ProfilePic}
                      sx={{ width: "50px", height: "50px" }}
                    />
                  )}
                  <Box
                    sx={{
                      position: "absolute",
                      top: "15px",
                      left: "13px",
                      cursor: "pointer",
                    }}
                    onClick={handleButtonClick}
                  >
                    <CameraAltIcon sx={{ color: "white", opacity: 0.8 }} />
                  </Box>
                </Box>
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
                  <StyledInput name="userName" fullWidth onChange={inputChangeHandler}  value={values.userName}/>
                </CustomInput>

                {/* email input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Email</StyledLabel>
                  <StyledInput name="email" fullWidth onChange={inputChangeHandler}  value={values.email} />
                </CustomInput>

                {/* address input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>Address</StyledLabel>
                  <StyledInput name="address" fullWidth onChange={inputChangeHandler}  value={values.address}/>
                </CustomInput>

                {/* city input field */}
                <CustomInput labelSize={4}>
                  <StyledLabel>City</StyledLabel>
                  <StyledInput name="city" fullWidth onChange={inputChangeHandler}  value={values.city}/>
                </CustomInput>

                {/* state & zip code input field */}
                <Box width="100%">
                  <Grid container>
                    <Grid item xs={8}>
                      <CustomInput labelSize={6}>
                        <StyledLabel>State</StyledLabel>
                        <StyledInput  name="state" fullWidth onChange={inputChangeHandler} value={values.state}/>
                      </CustomInput>
                    </Grid>
                    <Grid item xs={4}>
                      <CustomInput labelSize={3}>
                        <StyledLabel sx={{ paddingLeft: 1 }}>Zip</StyledLabel>
                        <StyledInput  name="zip"  fullWidth onChange={inputChangeHandler} value={values.zip}/>
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
                    name="country"
                    onChange={inputChangeHandler}  
                    value={values.country}
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
                    <MenuItem value={6}>Others</MenuItem>
                  </Select>
                </CustomInput>
              </Stack>
            </Paper>
          </Box>

          <Stack>
            <LoginBtn sx={{ marginBottom: 0 }} onClick={handleSubmit}>confirm</LoginBtn>
            <CancelBtn sx={{ marginBottom: 0 }}>cancel</CancelBtn>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default Profile;
