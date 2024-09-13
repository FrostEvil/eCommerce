import { RootState } from "../store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children?: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
