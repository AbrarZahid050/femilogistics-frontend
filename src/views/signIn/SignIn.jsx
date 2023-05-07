import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Cookie from "js-cookie";
// import jwt_decode from "jwt-decode";

//custom imports
import axiosInstance from "../../components/Axios/axiosInstance";
import { setLogin } from "../../redux/slices/authSlice";
import { LoginBtn } from "../../components/Styles/StyledBtns";
// import useAuth from "../../hooks/useAuth";

//styling imports
import classes from "./signIn.module.css";
import { CircularProgress } from "@mui/material";

//pic imports
import eyeOff from "../../assets/SignupImages/Eye Off.png";
import eyeOn from "../../assets/SignupImages/Eye On.png";
import emailPic from "../../assets/SignupImages/mail.png";
import pwdPic from "../../assets/SignupImages/pass.png";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { setAuth } = useAuth();

  const [display1, setDisplay1] = useState(false);
  const [values, setValues] = useState({
    Email: "",
    Password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [serverErrMsg, setServerErrMsg] = useState("");
  const [isLoading, setLoad] = useState(false);

  //* fn to handle onChange attr of input fields.
  const inputChangeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setValues({ ...values, [key]: value });
  };

  //* fn will run upon submition of the form.
  const handlerSignup = (event) => {
    event.preventDefault();

    //condition for checking if the email field is empty & setting the error.
    if (values.Email === "") {
      setError({
        ...error,
        email: "Please enter the email.",
        password: "",
      });
      return;
    }

    //condition for checking the email validation & setting the error.
    if (validateEmail(values.Email) === null) {
      setError({
        ...error,
        email: "Please enter a valid email like 'your.email@example.com'.",
        password: "",
      });
      return;
    }

    //condition for checking if the pwd field is empty & setting error.
    if (values.Password === "") {
      setError({
        ...error,
        password: "Please enter the password.",
        email: "",
      });
      return;
    }

    //just to be sure!
    setError({ ...error, email: "", password: "" });

    let newUser = {
      email: values.Email,
      password: values.Password,
    };

    const payload = JSON.stringify(newUser);
    setLoad((preVal) => !preVal);

    // Asychornous func for posting the request to server for user registration.
    const signInAPIHandler = async () => {
      try {
        let response = await axiosInstance.post("api/v1/login/", payload);

        // let JWTDecodedToken = jwt_decode(response.data.token[0]);
        // Cookie.set("accessToken", response.data.token[0], {
        //   sameSite: "strict",
        //   expires: 1,
        // });
        // setAuth({ user: JWTDecodedToken.email });

        setLoad((preVal) => !preVal);
        dispatch(setLogin(response.data.token[0]));
        navigate({ pathname: "/panel" });
      } catch (err) {
        setLoad((preVal) => !preVal);
        if (err.response.status === 400) {
          setServerErrMsg(err.response.data.non_field_errors[0]);
          setTimeout(() => {
            setServerErrMsg("");
          }, 5000);
        }
      }
    };

    signInAPIHandler(); //calling the Asychoronous func defined above.
  };

  //* fn for email validation.
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <div className={classes.bg}>
      <div className={classes.container}>
        <h1 className={classes.heading}>Fermi Logistics</h1>

        {/* card-body */}
        <div className={classes.card}>
          {/* card-heading */}
          <h2 className={classes.cardHeading}>SIGN IN</h2>

          {/* server-err text */}
          {serverErrMsg && (
            <div className={classes.serverErr}>
              <p className={classes.serverErrTxt}>{serverErrMsg}</p>
            </div>
          )}

          {/* input-form */}
          <form>
            {/* error-text for email */}
            {error.email && (
              <div className={classes.errorText}>Error: {error.email}</div>
            )}

            {/* email input */}
            <div className={classes.inputContainer}>
              <img className={classes.inputPic} src={emailPic} alt="" />
              <input
                className={error.email ? classes.error : classes.inputField}
                placeholder="Email"
                onChange={inputChangeHandler}
                onFocus={() => {
                  setError({ ...error, email: "" });
                  setServerErrMsg("");
                }}
                name="Email"
                autoComplete="off"
                type="text"
              />
            </div>

            {/* error-text for pwd */}
            {error.password && (
              <div className={classes.errorText}>Error: {error.password}</div>
            )}

            {/* input for pwd */}
            <div className={classes.inputContainer}>
              <img className={classes.inputPic} src={pwdPic} alt="" />
              <input
                className={error.password ? classes.error : classes.inputField}
                placeholder="Password"
                onChange={inputChangeHandler}
                onFocus={() => {
                  setError({ ...error, password: "" });
                  setServerErrMsg("");
                }}
                name="Password"
                autoComplete="off"
                type={display1 ? "text" : "password"}
              />
              <img
                className={classes.inputPicEnd}
                src={display1 ? eyeOn : eyeOff}
                alt=""
                onClick={() => {
                  setDisplay1((preVal) => !preVal);
                }}
              />
            </div>

            {/* terms-para */}
            <div className={classes.termsContainer}>
              <p className={classes.terms}>
                <Link className={classes.linkText} to="/forgotPassword">
                  Forgot Password?
                </Link>
              </p>
            </div>

            {/* submit-btn */}
            <LoginBtn
              onClick={handlerSignup}
              disabled={isLoading}
              startIcon={
                isLoading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : null
              }
            >
              Sign in
            </LoginBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
