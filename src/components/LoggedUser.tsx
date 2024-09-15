import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/userSlice";

function LoggedUser() {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    console.log("Log Out");
    dispatch(logout());
  };

  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold">
        Welcome <span className="text-green">{loggedUser?.username}!</span>
      </h2>
      <button
        onClick={handleLogOut}
        className=" mt-8 border-[1px] border-solid border-secondary w-fit py-1 px-8 rounded-md bg-green hover:bg-green-hover duration-300"
      >
        Log out
      </button>
    </div>
  );
}

export default LoggedUser;
