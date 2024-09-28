import axios from "axios";
import { API_URL } from "../constants";
import { Order } from "../types";

const createOrder = async (newOrder: Order) => {
  try {
    const response = await axios.post(`${API_URL}/orders`, newOrder);
    return response.data as Order;
  } catch (error) {
    console.log("Error", error);
  }
};

export default createOrder;
