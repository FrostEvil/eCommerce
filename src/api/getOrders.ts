import axios from "axios";
import { API_URL } from "../constants";

const getOrders = async (page: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/orders?_page=${page}&_per_page=3`,
      {
        params: {
          page: "_page",
        },
      }
    );
    return {
      products: response.data.data,
      nextPage: response.data.next
        ? (page = response.data.next)
        : (page = response.data.last),
      prevPage: response.data.prev
        ? (page = response.data.prev)
        : (page = response.data.first),
    };
  } catch (error) {
    console.log("Error", error);
  }
};

export default getOrders;
