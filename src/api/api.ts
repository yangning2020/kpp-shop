import type { CommonResponse } from "@/types/CommonHttp";
import type {
  ListProductRequest,
  ProductListResultData,
} from "@/types/Product";
import type { SellerDetail, UserInfoRequest } from "@/types/User";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL;

console.log("base api =", API_BASE_URL);

const api = axios.create({
  //baseURL: '/api',
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const listProduct = async (data: ListProductRequest) => {
  const response = await api.get("/product/listProduct", {
    params: data,
  });
  return response.data as CommonResponse<ProductListResultData>;
};

export const getUserInfoById = async (data: UserInfoRequest) => {
  const response = await api.post("/user/getUserInfoById", data);
  return response.data as CommonResponse<SellerDetail>;
};
