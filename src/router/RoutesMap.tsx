import ShopPage from "@/pages/ShopPage";
import { Navigate } from "react-router-dom";

// 定义路由结构体 , 设计字段为noauth, 减少配置需要
export interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[]; // 可选，表示子路由
}

const routesMap: RouteConfig[] = [
  {
    path: "/",
    element: <Navigate to="/shop" />, // 默认跳转到 Home 页面
  },
  {
    path: "/shop/:userid",
    element: <ShopPage />,
  },
];

export default routesMap;
