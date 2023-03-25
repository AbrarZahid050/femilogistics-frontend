import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../../redux/slices/authSlice";
// import useAuth from "../../hooks/useAuth";

const RequireAuth = () => {
  // const { auth } = useAuth();

  const auth = useSelector(selectUser);
  const location = useLocation();

  return auth ? (
    <Outlet />
  ) : (
    <Navigate to="" state={{ from: location }} replace />
  );
};

export default RequireAuth;
