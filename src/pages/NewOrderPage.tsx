import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { addProduct, clearOrder, removeProduct } from "../store/orderSlice";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Modal from "../components/Modal";
import { useMutation } from "@tanstack/react-query";
import createOrder from "../api/createOrder";
import { countOrderValue } from "../utils/countOrderValue";
import { addMessage, setIsOpen } from "../store/modalSlice";
import { Order } from "../types";

function NewOrderPage() {
  const orderedProduct = useSelector(
    (state: RootState) => state.order.orderedProduct
  );
  const dispatch = useDispatch();

  const createOrderMutation = useMutation({
    mutationFn: (newOrder: Order) => createOrder(newOrder),
    onSuccess: () => {
      console.log("Success");
      dispatch(clearOrder());
      dispatch(addMessage("You are successfuly placed an order!"));
      dispatch(setIsOpen(true));
    },
  });

  const handleAddOrder = () => {
    if (orderedProduct.length === 0) {
      dispatch(addMessage("First You need to add some products"));
      dispatch(setIsOpen(true));
    } else {
      createOrderMutation.mutate({
        id: uuid(),
        createdDate: new Date().toISOString(),
        value: countOrderValue(orderedProduct),
        products: orderedProduct,
      });
    }
  };

  const renderedProducts = orderedProduct.map((product) => {
    return (
      <tr key={product.id}>
        <td>
          {product.quantity} pieces of {product.name} cost:{" "}
          {product.quantity * product.price}€
        </td>
        <td className="flex flex-col">
          <button
            onClick={() => dispatch(addProduct(product))}
            className="duration-100 hover:text-purple"
          >
            <FaAngleUp size="1.5rem" />
          </button>
          <button
            onClick={() => dispatch(removeProduct(product))}
            className="duration-100 hover:text-pink"
          >
            <FaAngleDown size="1.5rem" />
          </button>
        </td>
      </tr>
    );
  });
  return (
    <div className="content-area flex flex-col items-center mt-20">
      <h2 className="text-2xl font-semibold">Your orderlist:</h2>
      <div className="mt-4">
        <table className="text-sm text-black border-collapse border-2 border-solid border-[rgb(140 140 140)]">
          <tbody>{renderedProducts}</tbody>
        </table>
      </div>
      <button
        // disabled={orderedProduct.length === 0 ? true : false}
        onClick={handleAddOrder}
        className=" mt-8 border-[1px] border-solid border-secondary w-fit py-1 px-8 rounded-md bg-green hover:bg-green-hover duration-300"
      >
        Order
      </button>
      <Modal />
    </div>
  );
}

export default NewOrderPage;
