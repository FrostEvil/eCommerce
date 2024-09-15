import { Product } from "../store/types";

function SingleProduct({ product }: { product: Product }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.amount}</td>
    </tr>
  );
}

export default SingleProduct;
