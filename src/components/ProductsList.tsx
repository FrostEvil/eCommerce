import { keepPreviousData, useQuery } from "@tanstack/react-query";
import getProducts from "../api/getProducts";
import SingleProduct from "./SingleProduct";
import { useSearchParams } from "react-router-dom";

import Pagination from "./Pagination";
import { Product } from "../types";

function ProductsList() {
  const [params] = useSearchParams();
  const page = parseInt(params.get("_page")!);
  console.log(page);

  const { data } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProducts(page),
  });
  console.log("component rerendering");
  const renderedProducts = (data?.products || []).map((product: Product) => {
    return <SingleProduct key={product.id} product={product} />;
  });
  return (
    <div className="flex flex-col items-center">
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
      <Pagination data={data} page={page} directory="products" perPage={5} />
    </div>
  );
}

export default ProductsList;
