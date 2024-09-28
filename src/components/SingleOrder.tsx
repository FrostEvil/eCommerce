import { Order } from "../types";
import { countOrderValue } from "../utils/countOrderValue";

function SingleOrder({ ...order }: Order) {
  const totalCost = countOrderValue(order.products);

  const renderedOrder = order.products.map((product) => {
    return (
      <tr key={product.name}>
        <td>{product.name}</td>
        <td>{product.quantity}</td>
        <td>{product.price}</td>
        <td>{product.quantity * product.price}</td>
      </tr>
    );
  });
  return (
    <div className="flex flex-col items-end absolute top-[56px] left-0 bg-white">
      <table>
        <thead>
          <tr>
            <th>Name:</th>
            <th>Quantity:</th>
            <th>Price:</th>
            <th>Cost:</th>
          </tr>
        </thead>
        <tbody>{renderedOrder}</tbody>
      </table>
      <p>Total cost: {totalCost}</p>
    </div>
  );
}

export default SingleOrder;
