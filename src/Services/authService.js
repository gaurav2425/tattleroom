import axios from "axios";
import api from "./api";

// User Signup
export const signup = async (name) => {
  try {
    console.log("Signupp");

    await axios
      .post(
        "http://172.16.0.105:5500/api/users/register",
        {
          "Content-Type": "application/json",
        },
        { name }
      )
      .then((res) => {
        console.log(">>>>>", res.data);
      })
      .catch((Err) => {
        console.log("Err>>>", Err);
      });

    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// User Login
export const login = async (name) => {
  try {
    const response = await api.post("/login", { name });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Get User Profile
export const getProfile = async () => {
  try {
    const response = await api.get("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
