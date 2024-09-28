import axios from "axios";
import { API_URL } from "../constants";
import { User } from "../types";

const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data as User[];
  } catch (error) {
    console.log("Error", error);
  }
};

export default getUsers;
