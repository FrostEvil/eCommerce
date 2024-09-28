import { useQuery } from "@tanstack/react-query";
import getOrders from "../api/getOrders";
import { useSearchParams } from "react-router-dom";
import { countOrderValue } from "../utils/countOrderValue";
import Pagination from "../components/Pagination";
import { Order } from "../types";
import SingleOrder from "../components/SingleOrder";
import { useState } from "react";

function OrdersPage() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [i, setI] = useState<string | number>("");
  const [params] = useSearchParams();
  const page = parseInt(params.get("_page")!);

  const { data } = useQuery({
    queryKey: ["orders", page],
    queryFn: () => getOrders(page),
  });

  const renderedOrders = data?.products.map((order: Order, index: number) => {
    return (
      <li
        onMouseOver={() => {
          setI(index);
          setIsHover(true);
        }}
        onMouseOut={() => setIsHover(false)}
        key={order.id}
        className="  p-4 w-full bg-white list-none shadow-[0_5px_25px_rgba(0,0,0,0.1)] duration-500	hover:z-20 hover:scale-110 hover:bg-green-hover hover:shadow-[0_5px_25px_rgba(0,0,0,0.2)]  hover:opacity-100 z-10"
      >
        <span className="w-5 h-5 text-center leading-5 bg-primary text-white inline-block rounded-[50%] mr-3 text-sm ">
          {index + 1}
        </span>{" "}
        Order value: {countOrderValue(order.products)}
        {isHover && i === index && <SingleOrder {...order} />}
      </li>
    );
  });

  return (
    <div className="content-area">
      <div className="flex flex-col items-center mt-20">
        <div className=" w-[300px] rounded-b-lg border-b-[20px] border-primary z-5 border-solid">
          <h2 className="text-black bg-green px-2 py-5 text-xl font-bold rounded-t-lg">
            All orders:
          </h2>
          <ul className="group relative bg-white">{renderedOrders}</ul>
        </div>
        <Pagination data={data} page={page} directory="orders" perPage={3} />
      </div>
    </div>
  );
}

export default OrdersPage;
