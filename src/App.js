import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignUp from "./views/signUp/SignUp";
import SignIn from "./views/signIn/SignIn";
import ForgetPassword from "./views/forgetPassword/ForgetPassword";
import FeedbackAdmin from "./views/feedbackAdmin/FeedbackAdmin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/forgotPassword" element={<ForgetPassword />} />
          <Route path="/feedbackAdmin" element={<FeedbackAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
