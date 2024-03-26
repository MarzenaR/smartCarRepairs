import React from "react";
import { Routes, Route } from "react-router-dom";
import { unloggedRoutes } from "../utils/routes";
import Home from "../views/Home";
import Login from "../views/Login";
import Register from "../views/Register";
import Account from "../views/Account";
import Terms from "../views/Terms";
import BookingJob from "../views/BookingJob";
import Bookings from "../views/Bookings";
import ContactUnlogged from "../views/ContactUnlogged";

const UnloggedRouter = () => {
  return (
    <Routes>
      <Route exact path={unloggedRoutes.home} element={<Home />} />
      <Route path={unloggedRoutes.login} element={<Login />} />
      <Route path={unloggedRoutes.register} element={<Register />} />
      <Route path={unloggedRoutes.bookings} element={<Bookings />} />
      <Route path={unloggedRoutes.account} element={<Account />} />
      <Route path={unloggedRoutes.terms} element={<Terms />} />
      <Route path={unloggedRoutes.BookingJob} element={<BookingJob />} />

      <Route
        path={unloggedRoutes.contactUnlogged}
        element={<ContactUnlogged />}
      />
    </Routes>
  );
};

export default UnloggedRouter;
