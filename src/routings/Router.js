import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navigations/Navbar";
import { unloggedRoutes, loggedRoutes } from "../utils/routes";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Modal from "../components/atoms/Modal";
import CarPark from "../views/CarPark";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Modal />
      <Routes>
        <Route exact path={unloggedRoutes.home} element={<Home />} />
        <Route path={unloggedRoutes.login} element={<Login />} />
        <Route path={unloggedRoutes.register} element={<Register />} />
        {/* admin routes */}
        <Route path={loggedRoutes.carPark} element={<CarPark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
