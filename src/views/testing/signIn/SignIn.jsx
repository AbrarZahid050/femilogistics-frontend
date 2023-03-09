import { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../../components/Axios/axiosInstance";

import emailPic from "../../../assets/signUp/mail.png";
import pwdPic from "../../../assets/signUp/pass.png";
import eyeOff from "../../../assets/signUp/Eye Off.png";
import eyeOn from "../../../assets/signUp/Eye On.png";

import classes from "./signIn.module.css";

const SignIn = () => {
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
  //   const [success, setSuccess] = useState(false);

  const inputChangeHandler = (event) => {
    let key = event.target.name; //value is an object, and to enter the target.value in appropriate key
    let value = event.target.value;
    setValues({ ...values, [key]: value }); //setting the values from input fields to state hook.
  };

  //this handler function will run with the onClick event from register button.
  const handlerSignup = (event) => {
    event.preventDefault();

    //condition for checking if the required input fields are empty or not.
    if (values.Email === "") {
      setError({
        ...error,
        email: "Please enter the email.",
        password: "",
      });
      return;
    }

    //condition for checking the email validation.
    if (validateEmail(values.Email) === null) {
      setError({
        ...error,
        email: "Please enter a valid email like 'your.email@example.com'.",
        password: "",
      });
      return;
    }

    if (values.Password === "") {
      setError({
        ...error,
        password: "Please enter the password.",
        email: "",
      });
      return;
    }

    setError({ ...error, email: "", password: "" });

    let newUser = {
      email: "arsalanahmad@gmail.com",
      password: "Xavor0011003",
    };

    //Asychornous func for posting the request to server for user registration.
    const dataFetchingFunction = async () => {
      try {
        let response = await axiosInstance.post("api/v1/signup", newUser);
        console.log(response.data.message);
        // let JWTDecodedToken = jwt_decode(response.data.access_token);
        // console.log(JWTDecodedToken);
        // navigate({ pathname: "/login" });
      } catch (err) {
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
