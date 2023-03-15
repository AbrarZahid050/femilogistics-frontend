import "./App.css";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";

//testing:
import SignIn from "./views/testing/signIn/SignIn";
import ForgotPwd from "./views/testing/forgotPassword/ForgotPwd";
import Layout from "./components/Layout/Layout";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./views/testing/dashboard/Dashboard";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="forgotpassword" element={<ForgotPwd />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}></Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
