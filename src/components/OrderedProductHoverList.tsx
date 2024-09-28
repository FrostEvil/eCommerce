import { useSelector } from "react-redux";
import { RootState } from "../store";

function OrderedProductHoverList() {
  const orderedProduct = useSelector(
    (state: RootState) => state.order.orderedProduct
  );

  const renderedOrderedProduct = orderedProduct.map((product) => {
    return (
      <tr key={product.id}>
        <td>Product: {product.name}</td>
        <td>Quantity: {product.quantity}</td>
      </tr>
    );
  });

  const quantity = orderedProduct.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <table className="text-sm text-black border-collapse border-2 border-solid border-[rgb(140 140 140)]">
        <thead>
          <tr>
            <th>Ordered product</th>
            <th>All: {quantity}</th>
          </tr>
        </thead>
        <tbody>{renderedOrderedProduct}</tbody>
      </table>
    </>
  );
}

export default OrderedProductHoverList;
