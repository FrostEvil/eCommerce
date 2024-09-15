import { useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts";
import SingleProduct from "./SingleProduct";
import { Product } from "../store/types";

function ProductsList() {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const renderedProducts = data?.map((product: Product) => {
    return <SingleProduct key={product.id} product={product} />;
  });
  return (
    <div>
      <table className=" text-sm border-collapse border-2 border-solid border-[rgb(140 140 140)]">
        <thead className="bg-[rgb(288 240 245)]">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>{renderedProducts}</tbody>
      </table>
    </div>
  );
}

export default ProductsList;
