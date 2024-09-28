import { RootState } from "../store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children?: ReactNode;
  notAllowed?: string[];
}

function ProtectedRoute({ children, notAllowed }: ProtectedRouteProps) {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);

  if (!loggedUser) {
    return <Navigate to="/login" />;
  }

  if (notAllowed?.find((user) => loggedUser.username === user)) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
