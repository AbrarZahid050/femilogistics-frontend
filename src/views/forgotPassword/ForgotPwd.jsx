import { useState } from "react";
import { Link } from "react-router-dom";
// import axiosInstance from "../../../components/Axios/axiosInstance";

import emailPic from "../../assets/SignupImages/mail.png";

import classes from "./forgotPwd.module.css";

const ForgotPwd = () => {
  const [values, setValues] = useState({
    Email: "",
  });
  const [error, setError] = useState({
    email: "",
  });
  const [serverErrMsg, setServerErrMsg] = useState("");

  //* fn to handle onChange attr of input fields.
  const inputChangeHandler = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setValues({ ...values, [key]: value });
  };

  //* fn will run upon submition of the form.
  const handlerSignup = (event) => {
    event.preventDefault();

    //condition for checking if the required input field is empty or not.
    if (values.Email === "") {
      setError({
        ...error,
        email: "Please enter the email.",
      });
      return;
    }

    //condition for checking the email validation.
    if (validateEmail(values.Email) === null) {
      setError({
        ...error,
        email: "Please enter a valid email like 'your.email@example.com'.",
      });
      return;
    }

    setError({ ...error, email: "", password: "" });

    let newUser = {
      email: values.Email,
    };

    console.log(newUser); //for testing puposes only.

    //Asychornous func for posting the request to server.
    const dataFetchingFunction = async () => {
      try {
        // let response = await axiosInstance.post("/forgotpwd", newUser);
        // let JWTDecodedToken = jwt_decode(response.data.access_token);
        // console.log(JWTDecodedToken);
        // navigate({ pathname: "/login" });
      } catch (err) {
        console.log(err);
        setServerErrMsg(err.message);
      }
    };

    dataFetchingFunction(); //calling the Asychoronous func defined above.
  };

  //email validation function.
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
          <h2 className={classes.cardHeading}>Forgot Password</h2>

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

            {/* terms-para */}
            <div className={classes.termsContainer}>
              <p className={classes.terms}>
                We will send a verification code to your email.
              </p>
            </div>

            {/* submit-btn */}
            <button className={classes.btn}>SEND RESET CODE</button>
          </form>

          {/* already-signedIn */}
          <p className={classes.bottomText}>
            Already have an account?
            <Link className={classes.linkText} to="/">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
