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
import {
  CustomInput,
  TextMaskCustom,
} from "../../../common/CustomInput/CustomInput";
import { createNewUser } from "../../../../redux/slices/userSlice";
import { useDispatch } from "react-redux";

import { Controller, useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  userName: yup.string().required("User name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Email should be valid."),
  phone: yup.string().required("Phone is required."),
  role: yup.string().required("Role is required."),
});

const NewUserModal = ({ open, onclose }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
  });

  // const [values, setValues] = useState({
  //   userName: "",
  //   email: "",
  //   phone: "",
  //   role: "",
  // });
  const [error, setError] = useState("");
  // const [serverErrMsg, setServerErrMsg] = useState("");

  const [isOpen, setOpen] = useState(false);

  //* fn to handle onChange attr of input fields.
  // const inputChangeHandler = (event) => {
  //   let key = event.target.name;
  //   let value = event.target.value;
  //   setValues({ ...values, [key]: value });
  // };

  const submittingToAPI = async (values) => {
    const userData = {
      username: values.userName,
      email: values.email,
      phone: values.phone,
      role: values.role,
    };

    const data = JSON.stringify(userData);
    console.log(data);
    dispatch(createNewUser(data));
    onclose();
  };

  const onSubmit = (data) => {
    const phone = data.phone;
    const newNum = phone
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("-", "")
      .replaceAll(" ", "");
    const newPhone = parseInt(newNum);
    data.phone = newPhone;
    submittingToAPI(data);
  };

  const onError = (errors) => {
    setError(errors);
  };

  const handleForBlur = (event) => {
    const key = event.target.name;
    setError({ ...error, [key]: "" });
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
            <CustomInput isError={error.userName ? error.userName.message : ""}>
              <StyledLabel>User Name</StyledLabel>
              <StyledInput
                fullWidth
                {...register("userName")}
                onBlur={handleForBlur}
                // name="userName"
                // onChange={inputChangeHandler}
                // value={values.userName}
              />
            </CustomInput>

            <CustomInput isError={error.email ? error.email.message : ""}>
              <StyledLabel>User Email</StyledLabel>
              <StyledInput
                fullWidth
                {...register("email")}
                onBlur={handleForBlur}
                // name="email"
                // onChange={inputChangeHandler}
                // value={values.email}
              />
            </CustomInput>

            <CustomInput isError={error.phone ? error.phone.message : ""}>
              <StyledLabel>User Contact</StyledLabel>
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <StyledInput
                    fullWidth
                    name="phone"
                    onChange={onChange}
                    onBlur={handleForBlur}
                    value={value || ""}
                    inputComponent={TextMaskCustom}
                  />
                )}
              ></Controller>
            </CustomInput>

            <CustomInput isError={error.role ? error.role.message : ""}>
              <StyledLabel>User Role</StyledLabel>
              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                // value={values.role}
                // label="Age"
                // onChange={inputChangeHandler}
                // name="role
                defaultValue=""
                open={isOpen}
                onClose={() => setOpen(false)}
                onOpen={() => {
                  setOpen(true);
                  setError({ ...error, role: "" });
                }}
                {...register("role")}
                input={<StyledInput fullWidth name="role" />}
                IconComponent={() => {
                  return (
                    <IconButton onClick={() => setOpen((preVal) => !preVal)}>
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
            <CancelBtn
              variant="contained"
              fullWidth
              onClick={() => {
                setError("");
                onclose();
              }}
            >
              cancel
            </CancelBtn>
            <LoginBtn
              variant="contained"
              fullWidth
              onClick={handleSubmit(onSubmit, onError)}
            >
              save
            </LoginBtn>
          </Box>
        </Box>
      </Card>
    </Modal>
  );
};

export default NewUserModal;
