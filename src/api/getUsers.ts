import axios from "axios";
import { API_URL } from "../constants";
import { User } from "../store/types";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    console.log(response);
    return response.data as User[];
  } catch (error) {
    console.log("Error", error);
  }
};

export default getUsers;
