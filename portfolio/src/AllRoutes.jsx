import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/homePage/Home";
import Pagenotfound from "./components/pageNotFound/Pagenotfound";

const routes = [
  {
    path: "/",
    Component: Home,
  },
  {
    path: "*",
    Component: Pagenotfound,
  },
];

export const AllRoutes = () => (
  <Routes>
    {routes.map((route, index) => (
      <Route
        key={index}
        path={route.path}
        element={<route.Component />}
      ></Route>
    ))}
  </Routes>
);
