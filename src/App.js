import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Dashboard from "./views/dashboard/Dashboard.jsx";
import ForgotPwd from "./views/forgotPassword/ForgotPwd.jsx";
import SignIn from "./views/signIn/SignIn.jsx";
// Local Fonts File (Roboto)
import "./assets/Fonts/Roboto/Roboto-Bold.ttf";
import "./assets/Fonts/Roboto/Roboto-Medium.ttf";
import "./assets/Fonts/Roboto/Roboto-Regular.ttf";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPwd />} />
          <Route path="/dashboard" element={<Dashboard />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
