import { useDispatch } from "react-redux";
import getUsers from "../api/getUsers";
import { useQuery } from "@tanstack/react-query";
import { login } from "../store/userSlice";

interface LoginProps {
  email: string;
  password: string;
}

const useLogin = ({ email, password }: LoginProps) => {
  const dispatch = useDispatch();

  const { data } = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const foundedUser = data?.find((user) => user.email === email);

  if (!foundedUser) {
    return {
      message: "User not found",
    };
  }

  if (foundedUser.password !== password) {
    return {
      message: "Incorrect password",
    };
  }

  dispatch(login(foundedUser));
  return {
    message: "User logged in",
  };
};

export default useLogin;
