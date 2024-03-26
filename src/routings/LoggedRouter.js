import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { loggedRoutes } from "../utils/routes";
import Bookings from "../views/Bookings";
import Garages from "../views/Garages";
import Users from "../views/Users";
import Account from "../views/Account";
import Terms from "../views/Terms";
import BookingJob from "../views/BookingJob";
import Contact from "../views/Contact";
import { useSelector } from "react-redux";
import Welcome from "../views/Welcome";

const LoggedRouter = () => {
  const { currentUser } = useSelector((state) => state);
  return (
    <Routes>
      {/* user routes */}
      <Route path={loggedRoutes.bookings} element={<Bookings />} />
      <Route path={loggedRoutes.account} element={<Account />} />
      <Route path={loggedRoutes.bookingJob} element={<BookingJob />} />
      <Route path={loggedRoutes.terms} element={<Terms />} />
      <Route path={loggedRoutes.contact} element={<Contact />} />
      {currentUser?.role === "user" && (
        <Route path={loggedRoutes.welcome} element={<Welcome />} />
      )}
      ` `{" "}
      {currentUser?.role === "admin" && (
        <>
          <Route path={loggedRoutes.garages} element={<Garages />} />
          <Route path={loggedRoutes.users} element={<Users />} />
        </>
      )}
      <Route path="*" element={<Navigate to={loggedRoutes.bookings} />} />
    </Routes>
  );
};

export default LoggedRouter;
