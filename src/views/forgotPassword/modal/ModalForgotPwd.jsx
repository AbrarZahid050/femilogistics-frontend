import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// import Cookie from "js-cookie";

//custom imports
import axiosInstance from "../../../components/Axios/axiosInstance";
import { setLogout } from "../../../redux/slices/authSlice";
// import useAuth from "../../../hooks/useAuth";

//styling imports
import { Box, Typography, Modal } from "@mui/material";
import classes from "./modal.module.css";

//pic imports
import eyeOff from "../../../assets/SignupImages/Eye Off.png";
import eyeOn from "../../../assets/SignupImages/Eye On.png";
import pwdPic from "../../../assets/SignupImages/pass.png";

const ModalForgotPwd = ({ isOpen }) => {
  // const { setAuth } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, SetOpen] = useState(isOpen);
  const [display, setDisplay] = useState(false);
  const [values, setValues] = useState({
    password: "",
    code: [],
  });

  const [error, setError] = useState({ pwd: "", code: "" });
  const [serverErrMsg, setServerErrMsg] = useState("");

  //toastify for testing purposes only, will be removed in future.
  const showToastMessage = (text) => {
    toast.success(`${text} !`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  //fn for closing the modal
  const handleClose = () => {
    SetOpen(false);
  };

  //fn for handling input
  const handleInputChange = (event) => {
    let temp = [...values.code];
    let key = event.target.name;
    let value = event.target.value;

    if (
      key === "code1" ||
      key === "code2" ||
      key === "code3" ||
      key === "code4"
    ) {
      const index = key.slice(-1);
      temp[index - 1] = value;
      setValues({ ...values, code: temp });
    }
    if (key === "password") {
      setValues({ ...values, [key]: value });
    }
  };

  //fn for submitting request.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.password === "") {
      setError({ ...error, pwd: "Please enter the password" });
      return;
    }

    const temp = [...values.code];
    const tempNum = temp.join("");

    if (tempNum.length < 4) {
      setError({ ...error, code: "Please enter the complete code", pwd: "" });
      return;
    }

    const newCode = parseInt(tempNum);

    if (isNaN(newCode)) {
      setError({
        ...error,
        code: "Please enter only the nnumbers in code",
        pwd: "",
      });
      return;
    }

    const payload = {
      password: values.password,
      code: parseInt(tempNum),
    };

    const newPayload = JSON.stringify(payload);

    //Asychornous func for posting the request to server.
    const updatePwdApi = async () => {
      try {
        let response = await axiosInstance.post(
          "users/update_password/",
          newPayload
        );
        if (response.status === 200) {
          showToastMessage(response.data.message);
          // Cookie.remove("accessToken");
          // setAuth({});

          dispatch(setLogout());
          navigate({ pathname: "/" });
        }
      } catch (err) {
        if (err.response.status === 400) {
          setServerErrMsg(err.response.data.message[0]);
        }
      }
    };

    updatePwdApi(); //calling the Asychoronous func defined above.
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* centering the modal */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          outline: "none",
        }}
      >
        {/* modal heading */}
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Email Verification
        </Typography>

        {/* server-err text */}
        {serverErrMsg && (
          <div className={classes.serverErr}>
            <p className={classes.serverErrTxt}>{serverErrMsg}</p>
          </div>
        )}

        {/* modal text */}
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2, textAlign: "justify" }}
        >
          In order to proceed, it is necessary to validate your email address.
          Please enter your preferred new password and provide the distinct code
          that has been transmitted to your registered email address.
        </Typography>

        {/* form body */}
        <Box sx={{ marginTop: 2 }}>
          {/* input-form */}
          <form onSubmit={handleSubmit}>
            {/* error-text for pwd */}
            {error.pwd && (
              <div className={classes.errorText}>Error: {error.pwd}</div>
            )}

            {/* input for pwd */}
            <div className={classes.inputContainer}>
              <img className={classes.inputPic} src={pwdPic} alt="" />
              <input
                className={
                  classes.inputField + " " + (error.pwd ? classes.error : null)
                }
                onChange={handleInputChange}
                onFocus={() => setError({ ...error, pwd: "" })}
                placeholder="Password"
                name="password"
                autoComplete="off"
                type={display ? "text" : "password"}
              />
              <img
                className={classes.inputPicEnd}
                src={display ? eyeOn : eyeOff}
                alt=""
                onClick={() => {
                  setDisplay((preVal) => !preVal);
                }}
              />
            </div>

            {/* error-text for pwd */}
            {error.code && (
              <div className={classes.errorText}>Error: {error.code}</div>
            )}

            {/* code heading */}
            <Typography sx={{ color: "#6f758b", marginBottom: 1 }}>
              Enter the code below:
            </Typography>

            {/* code form body */}
            <div
              className={classes.codeInputContainer}
              onFocus={() => {
                setError({ ...error, code: "" });
                setServerErrMsg("");
              }}
            >
              <input
                className={
                  classes.codeInputField +
                  " " +
                  (error.code ? classes.error : classes.codeInputFieldBorder)
                }
                maxLength="1"
                onChange={handleInputChange}
                name="code1"
                autoComplete="off"
                // type="number"
              />
              <div className={classes.codeInputDash}>-</div>
              <input
                className={
                  classes.codeInputField +
                  " " +
                  (error.code ? classes.error : classes.codeInputFieldBorder)
                }
                maxLength="1"
                onChange={handleInputChange}
                name="code2"
                autoComplete="off"
                // type="number"
              />
              <div className={classes.codeInputDash}>-</div>
              <input
                className={
                  classes.codeInputField +
                  " " +
                  (error.code ? classes.error : classes.codeInputFieldBorder)
                }
                maxLength="1"
                onChange={handleInputChange}
                name="code3"
                autoComplete="off"
                // type="number"
              />
              <div className={classes.codeInputDash}>-</div>
              <input
                className={
                  classes.codeInputField +
                  " " +
                  (error.code ? classes.error : classes.codeInputFieldBorder)
                }
                maxLength="1"
                onChange={handleInputChange}
                name="code4"
                autoComplete="off"
                // type="number"
              />
            </div>

            {/* submit btn */}
            <button className={classes.btn}>Submit</button>
          </form>

          <Box sx={{ textAlign: "center" }}>
            {/* close btn */}
            <Typography
              sx={{
                marginTop: 2,
                cursor: "pointer",
                display: "inline-block",
                color: "#6f758b",
                "&:hover": { color: "#545dff" },
              }}
              onClick={handleClose}
            >
              Close
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalForgotPwd;
