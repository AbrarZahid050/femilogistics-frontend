import { useState } from "react";
import {
  Modal,
  Card,
  Box,
  Typography,
  Paper,
  MenuItem,
  Select,
} from "@mui/material";
import {
  StyledInput,
  StyledLabel,
  LoginBtn,
  CancelBtn,
} from "../../../../components/Styles/StyledBtns";
import { ReactComponent as SelectArrows } from "../../../../assets/Users/selectArrows.svg";
import CustomInput from "../../../carrier/components/InputFields/CustomInput";
import authInterceptor from "../../../../components/Axios/axiosInterceptor";

const NewUserModal = ({ open, onclose }) => {
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const fetchData = async () => {
    try {
      const resp = await authInterceptor.get("users/");
      console.log(resp);
    } catch (err) {
      console.log(err);
    }
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
              <StyledInput fullWidth />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Email</StyledLabel>
              <StyledInput fullWidth />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Contact</StyledLabel>
              <StyledInput fullWidth />
            </CustomInput>

            <CustomInput>
              <StyledLabel>User Role</StyledLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Age"
                onChange={handleChange}
                input={<StyledInput fullWidth />}
                IconComponent={() => {
                  return <SelectArrows style={{ marginRight: "10px" }} />;
                }}
              >
                <MenuItem value={"Driver"}>Driver</MenuItem>
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Sub-Admin"}>Sub-Admin</MenuItem>
              </Select>
            </CustomInput>
          </Box>
          <Box display="flex" gap={1} marginTop={2}>
            <CancelBtn variant="contained" fullWidth onClick={onclose}>
              cancel
            </CancelBtn>
            <LoginBtn variant="contained" fullWidth onClick={fetchData}>
              save
            </LoginBtn>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default NewUserModal;
