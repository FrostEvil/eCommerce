import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import OrderedProductHoverList from "./OrderedProductHoverList";

function OrderedProduct() {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div className=" relative flex items-center">
      <Link
        to="/orders/new"
        className="duration-300 hover:text-hover"
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        <AiOutlineShoppingCart size="1.5rem" />
      </Link>

      {isHover && (
        <div className="absolute top-10 right-0 w-[300px]">
          <OrderedProductHoverList />
        </div>
      )}
    </div>
  );
}

export default OrderedProduct;
