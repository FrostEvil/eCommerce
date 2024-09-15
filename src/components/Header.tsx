import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
function Header() {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);

  return (
    <header className="h-10 bg-secondary w-full text-white font-sans ">
      <div className="container mx-auto px-4 h-full flex justify-end">
        <nav className="h-full w-[30%] ">
          <ul className="flex justify-between items-center h-full uppercase ">
            <li className=" duration-300 hover:text-hover">
              <Link to="/">Home</Link>
            </li>
            <li className=" duration-300 hover:text-hover">
              <Link to="/products">Products</Link>
            </li>
            <li className="duration-300 hover:text-hover">
              <Link to="/login">
                {loggedUser?.id ? loggedUser?.username : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
