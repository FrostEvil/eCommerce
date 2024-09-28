import LoginForm from "../components/LoginForm";

import LoggedUser from "../components/LoggedUser";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function LoginPage() {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);

  return (
    <div className="content-area flex flex-col  items-center">
      {loggedUser?.id ? <LoggedUser /> : <LoginForm />}
    </div>
  );
}

export default LoginPage;
