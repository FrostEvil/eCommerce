import axios from "axios";
import { API_URL } from "../constants";
import { Product } from "../store/types";

const getProducts = async () => {
  try {
    const reponse = await axios.get(`${API_URL}/products`);
    return reponse.data as Product[];
  } catch (error) {
    console.log("Error", error);
  }
};

export default getProducts;
