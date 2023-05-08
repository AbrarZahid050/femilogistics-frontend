import { useState } from "react";
import {
  Modal,
  Card,
  Box,
  Typography,
  Paper,
  MenuItem,
  Select,
  IconButton,
} from "@mui/material";
import {
  StyledInput,
  StyledLabel,
  LoginBtn,
  CancelBtn,
} from "../../../../components/Styles/StyledBtns";
import { ReactComponent as SelectArrows } from "../../../../assets/Users/selectArrows.svg";
import CustomInput from "../../../carrier/components/InputFields/CustomInput";
import { createNewUser } from "../../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

const NewUserModal = ({ open, onclose }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    userName: "",
    email: "",
    phone: "",
    role: "",
  });
  // const [error, setError] = useState({
  //   userName: "",
  //   email: "",
  //   phone: "",
  //   role: "",
  // });
  // const [serverErrMsg, setServerErrMsg] = useState("");

  //* fn to handle onChange attr of input fields.
  const inputChangeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = async () => {
    const userData = {
      username: values.userName,
      email: values.email,
      phone: values.phone,
      role: values.role,
    };

    const data = JSON.stringify(userData);
    dispatch(createNewUser(data));
    onclose();
  };

  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ width: "500px" }}>
        <Box bgcolor="#282842" p={2} width="100%">
          <Typography variant="h6" color="white">
            NEW USER
          </Typography>
        </Box>
        <Box p={2}>
          <Box
            component={Paper}
            variant="outlined"
            p={2}
            gap={1}
            display="flex"
            flexDirection="column"
          >
            <CustomInput>
              <StyledLabel>User Name</StyledLabel>
              <StyledInput
                fullWidth
                name="userName"
                onChange={inputChangeHandler}
                value={values.userName}
              />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Email</StyledLabel>
              <StyledInput
                fullWidth
                name="email"
                onChange={inputChangeHandler}
                value={values.email}
              />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Contact</StyledLabel>
              <StyledInput
                fullWidth
                name="phone"
                onChange={inputChangeHandler}
                value={values.phone}
              />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Role</StyledLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={values.role}
                label="Age"
                onChange={inputChangeHandler}
                name="role"
                input={<StyledInput fullWidth />}
                IconComponent={() => {
                  return (
                    <IconButton>
                      <SelectArrows />
                    </IconButton>
                  );
                }}
              >
                <MenuItem value={1}>System Admin</MenuItem>
                <MenuItem value={2}>Office Admin</MenuItem>
                <MenuItem value={3}>Accounts Admin</MenuItem>
                <MenuItem value={4}>Operations</MenuItem>
                <MenuItem value={5}>Developer</MenuItem>
                <MenuItem value={6}>Super Admin</MenuItem>
                <MenuItem value={7}>Integration</MenuItem>
                <MenuItem value={8}>Driver</MenuItem>
              </Select>
            </CustomInput>
          </Box>
          <Box display="flex" gap={1} marginTop={2}>
            <CancelBtn variant="contained" fullWidth onClick={onclose}>
              cancel
            </CancelBtn>
            <LoginBtn variant="contained" fullWidth onClick={handleSubmit}>
              save
            </LoginBtn>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default NewUserModal;
