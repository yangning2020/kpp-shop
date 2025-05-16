import { Route, Routes } from "react-router-dom";
import routesMap, { type RouteConfig } from "@/router/RoutesMap";

const renderRoutes = (routes: RouteConfig[]) =>
  routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.element}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));

const AppRoutes = () => {
  return <Routes>{renderRoutes(routesMap)}</Routes>;
};

export default AppRoutes;
