import { useState } from "react";

//layoput components
import { Container, Box } from "@mui/system";

//react-router-dom
import { Link } from "react-router-dom";

//custom component
import Input from "../../components/input/Input";

//css file
import "./Auth.css";

const SignUp = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    Re_enterPassword: "",
  });

  console.log(values);

  //this handler function will run with the onChange event in the input fields.
  const inputChangeHandler = (event) => {
    let key = event.target.name; //value is an object, and to enter the target.value in appropriate key
    let value = event.target.value;
    setValues({ ...values, [key]: value }); //setting the values from input fields to state hook.
  };

  //this handler function will run with the onClick event from register button.
  const handlerSignup = () => {
    //condition for checking if the required input fields are empty or not.
    if (
      values.Email === "" ||
      values.Password === "" ||
      values.Re_enterPassword === ""
    ) {
      alert("please enter all the values...");
      return;
    }

    //condition for checking the email validation.
    if (validateEmail(values.Email) === null) {
      alert("please enter a valid email...");
      return;
    }

    if (values.Re_enterPassword !== values.Password) {
      alert("Confirm Password does not match!");
      return;
    }

    // let newUser = {
    //   email: values.Email,
    //   password: values.Password,
    // };

    //Asychornous func for posting the request to server for user registration.
    const dataFetchingFunction = async () => {
      // try {
      //   let response = await axiosInstance.post("/api/register", newUser);
      //   console.log(response.data.message);
      //   let JWTDecodedToken = jwt_decode(response.data.access_token);
      //   console.log(JWTDecodedToken);
      //   navigate({ pathname: "/login" });
      // } catch (err) {
      //   console.log(err);
      // }
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
    <>
      {/* div for the bgColor */}
      <div className="main-signUp-bg Deep-color">
        {/* mui-system component for the responsive view  */}
        <Container sx={{ height: "100%" }}>
          {/* mui-system component to center all the content */}
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* top-heading */}
            <div className="heading White-color">
              <h2>Fermi Logistics</h2>
            </div>

            {/* card body starts */}
            <div className="signUp-card">
              {/* card item #1 */}
              <h3 className="signUp-card-heading">Sign Up</h3>

              {/* card item #2 */}
              <form className="signUp-card-form">
                <div className="signUp-card-form-container">
                  <Input
                    placeHolder="Email"
                    changeHandler={inputChangeHandler}
                  />
                </div>
                <div className="signUp-card-form-container">
                  <Input
                    placeHolder="Password"
                    changeHandler={inputChangeHandler}
                  />
                </div>
                <div className="signUp-card-form-container">
                  <Input
                    placeHolder="Re-enter Password"
                    changeHandler={inputChangeHandler}
                  />
                </div>
              </form>

              {/* card item #3 */}
              <div className="signUp-card-terms-container">
                {/* //1 */}
                <div className="signUp-card-terms-para">
                  <p className="signUp-card-terms">
                    By signing up, you confirm that you’ve read and accepted our
                    <span className="link-to-signIn-span">
                      <Link className="link-to-signIn-span"> User Notice </Link>
                    </span>
                    and
                    <span className="link-to-signIn-span">
                      <Link className="link-to-signIn-span">
                        {" "}
                        Privacy Policy
                      </Link>
                    </span>
                    .
                  </p>
                </div>

                {/* //2 */}
                <div className="signUp-btn-container">
                  <button className="Auth-btn" onClick={handlerSignup}>
                    SIGN UP
                  </button>
                </div>

                {/* //3 */}
                <div className="link-to-signIn-container">
                  <p className="link-to-signIn">
                    Already have an account?
                    <Link to="/signIn" className="link-to-signIn-span">
                      <span> Sign In</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* card-body ends */}
          </Box>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
