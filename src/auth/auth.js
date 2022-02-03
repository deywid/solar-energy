import { Navigate, useLocation, Outlet } from "react-router-dom";

export const userAuth = () => localStorage.getItem("token") !== null;

const ProtectedRoute = () => {
  const location = useLocation();
  const isAuth = userAuth();

  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
