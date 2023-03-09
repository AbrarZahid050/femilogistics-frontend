import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//testing:
import SignUp from "./views/testing/signUp/SignUp";
import SignIn from "./views/testing/signIn/SignIn";
import ForgotPwd from "./views/testing/forgotPassword/ForgotPwd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPwd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
