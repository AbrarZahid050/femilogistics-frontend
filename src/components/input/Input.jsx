import { useState } from "react";

import "./Input.css";

import emailPic from "../../assets/signUp/mail.png";
import passPic from "../../assets/signUp/pass.png";
import eyeOn from "../../assets/signUp/Eye On.png";
import eyeOff from "../../assets/signUp/Eye Off.png";

const Input = ({ placeHolder, changeHandler }) => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <div className="input-pic-container">
        <img
          src={placeHolder === "Email" ? emailPic : passPic}
          className="input-pic"
        />
      </div>

      {/* functionality to display different input fields based on placeHolder props */}
      {placeHolder === "Password" || placeHolder === "Confirm Password" ? (
        <>
          <input
            placeholder={placeHolder}
            // when display state is true the input field would be hidden
            // otherwise will show whats in the field to the user.
            type={display ? "password" : "text"}
            className="password-input"
            onChange={changeHandler}
            name={placeHolder.replace(" ", "")}
          />

          {/* since password fields have an eye icon at the end, the following code is for that*/}
          <div className="password-pic-container">
            <img
              src={display ? eyeOn : eyeOff}
              className="password-pic"
              onClick={() => {
                setDisplay((preValue) => !preValue);
              }}
            />
          </div>
        </>
      ) : (
        <input
          placeholder={placeHolder}
          type="email"
          onChange={changeHandler}
          name={placeHolder}
        />
      )}
    </>
  );
};

export default Input;
