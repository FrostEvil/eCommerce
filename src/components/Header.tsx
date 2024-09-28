import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Link } from "react-router-dom";
import OrderedProduct from "./OrderedProduct";
function Header() {
  const loggedUser = useSelector((state: RootState) => state.user.userLogged);

  return (
    <header className="h-10 bg-secondary w-full text-white font-sans ">
      <div className="container mx-auto px-4 h-full flex justify-end gap-8">
        <nav className="h-full w-[50%] ">
          <ul className="flex justify-between items-center h-full uppercase ">
            <li className=" duration-300 hover:text-hover">
              <Link to="/">Home</Link>
            </li>
            <li className=" duration-300 hover:text-hover">
              <Link to="/products?_page=1&_per_page=5">Products</Link>
            </li>
            {loggedUser?.username === "Admin" && (
              <li className=" duration-300 hover:text-hover">
                <Link to="/sales">Sales</Link>
              </li>
            )}
            {(loggedUser?.username === "Admin" ||
              loggedUser?.username === "Employee") && (
              <li className=" duration-300 hover:text-hover">
                <Link to="/orders?_page=1&_per_page=3">Orders</Link>
              </li>
            )}
            <li className="duration-300 hover:text-hover text-green">
              <Link to="/login">
                {loggedUser?.id ? loggedUser?.username : "Login"}
              </Link>
            </li>
          </ul>
        </nav>
        {loggedUser?.id && <OrderedProduct />}
      </div>
    </header>
  );
}

export default Header;
