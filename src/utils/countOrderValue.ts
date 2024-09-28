import { OrderedProduct } from "../types";

export const countOrderValue = (orderedProducts: OrderedProduct[]) => {
  return orderedProducts.reduce(
    (acc, cur) => acc + cur.price * cur.quantity,
    0
  );
};
