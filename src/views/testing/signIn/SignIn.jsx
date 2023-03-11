import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import axiosInstance from "../../../components/Axios/axiosInstance";
// import useAuth from "../../../hooks/useAuth";
import classes from "./signIn.module.css";

import emailPic from "../../../assets/signUp/mail.png";
import pwdPic from "../../../assets/signUp/pass.png";
import eyeOff from "../../../assets/signUp/Eye Off.png";
import eyeOn from "../../../assets/signUp/Eye On.png";

const SignIn = () => {
  // const { auth, setAuth } = useAuth();

  // const navigate = useNavigate();

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

  //* fn to handle onChange attr of input fields.
  const inputChangeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setValues({ ...values, [key]: value });
  };

  //* fn to show toast message.
  const showToastMessage = (txt) => {
    toast.success(txt, {
      position: toast.POSITION.TOP_RIGHT,
    });
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
    console.log(payload);

    // setAuth({ user: newUser.email, pwd: newUser.password });
    // navigate({ pathname: "/testroute" });

    // Asychornous func for posting the request to server for user registration.
    const signInAPIHandler = async () => {
      try {
        let response = await axiosInstance.post("api/vi/sigin/", payload);

        console.log(response);
        showToastMessage("User registered successfully!");
        // let JWTDecodedToken = jwt_decode(response.data.access_token);
        // console.log(JWTDecodedToken);
        // navigate({ pathname: "/login" });
      } catch (err) {
        console.log(err);
        setServerErrMsg(err.message);
        setTimeout(() => {
          setServerErrMsg("");
        }, 5000);
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
          <form onSubmit={handlerSignup}>
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
            <button className={classes.btn}>SIGN IN</button>
          </form>

          {/* already-signedIn */}
          <p className={classes.bottomText}>
            Don't have an account?
            <Link className={classes.linkText} to="/signUp">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
