import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";

//testing:
import SignUp from "./views/testing/signUp/SignUp";
import SignIn from "./views/testing/signIn/SignIn";
import ForgotPwd from "./views/testing/forgotPassword/ForgotPwd";
import Layout from "./components/Layout/Layout";
import TestRoute from "./views/testing/testRoute/TestRoute";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgotPassword" element={<ForgotPwd />} />
          </Routes>
        </BrowserRouter> */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgotpassword" element={<ForgotPwd />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="testroute" element={<TestRoute />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
