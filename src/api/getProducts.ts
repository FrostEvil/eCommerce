import axios from "axios";
import { API_URL } from "../constants";
import { GetApiProducts } from "../types";

const getProducts = async (page: number): Promise<GetApiProducts> => {
  try {
    const response = await axios.get(
      `${API_URL}/products?_page=${page}&_per_page=5`,
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
    throw error;
  }
};

export default getProducts;
