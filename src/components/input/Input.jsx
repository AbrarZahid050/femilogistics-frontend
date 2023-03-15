// import { useState } from "react";

// import "./Input.css";

// import { Box } from "@mui/system";

// import emailPic from "../../assets/signUp/mail.png";
// import passPic from "../../assets/signUp/pass.png";
// import eyeOn from "../../assets/signUp/Eye On.png";
// import eyeOff from "../../assets/signUp/Eye Off.png";

// const CustomInput = ({ placeHolder, changeHandler, error }) => {
//   const [display, setDisplay] = useState(true);

//   // return (
//   //   <>
//   //     <div className="input-pic-container">
//   //       <img
//   //         src={placeHolder === "Email" ? emailPic : passPic}
//   //         className="input-pic"
//   //         alt=""
//   //       />
//   //     </div>

//   //     {/* functionality to display different input fields based on placeHolder props */}
//   //     {placeHolder === "Password" || placeHolder === "Confirm Password" ? (
//   //       <>
//   //         <input
//   //           placeholder={placeHolder}
//   //           // when display state is true the input field would be hidden
//   //           // otherwise will show whats in the field to the user.
//   //           type={display ? "password" : "text"}
//   //           className="password-input"
//   //           onChange={changeHandler}
//   //           name={placeHolder.replace(" ", "")}
//   //         />

//   //         {/* since password fields have an eye icon at the end, the following code is for that*/}
//   //         <div className="password-pic-container">
//   //           <img
//   //             src={display ? eyeOff : eyeOn}
//   //             className="password-pic"
//   //             onClick={() => {
//   //               setDisplay((preValue) => !preValue);
//   //             }}
//   //             alt=""
//   //           />
//   //         </div>
//   //       </>
//   //     ) : (
//   //       <input
//   //         placeholder={placeHolder}
//   //         type="email"
//   //         onChange={changeHandler}
//   //         name={placeHolder}
//   //       />
//   //     )}
//   //   </>
//   // );

//   return (
//     <>
//       {placeHolder === "Email" ? (
//         <div className="image-container">
//           <img src={emailPic} className="input-pic" />
//           <input
//             className={error && "error"}
//             placeholder={placeHolder}
//             type="text"
//             name={placeHolder}
//             onChange={changeHandler}
//           />
//           {error && <Box sx={{ color: "red" }}>{error}</Box>}
//         </div>
//       ) : (
//         <div className="image-container">
//           <img src={passPic} className="input-pic" />
//           <input
//             className={error && "error"}
//             placeholder={placeHolder}
//             type={display ? "password" : "text"}
//             onChange={changeHandler}
//             name={placeHolder.replace(" ", "").replace("-", "_")}
//           />
//           {error && <Box sx={{ color: "red" }}>{error}</Box>}
//           <img
//             src={display ? eyeOff : eyeOn}
//             className="input-pic-end"
//             onClick={() => {
//               setDisplay((preValue) => !preValue);
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default CustomInput;
