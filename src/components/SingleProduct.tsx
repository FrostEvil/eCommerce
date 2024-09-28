import { useDispatch } from "react-redux";
import { addProduct } from "../store/orderSlice";
import { Product } from "../types";

function SingleProduct({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(addProduct(product));
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.amount}</td>
      <td>
        <button onClick={handleAddProduct}>Buy</button>
      </td>
    </tr>
  );
}

export default SingleProduct;
