import React from "react";
import Navbar from "../components/navigations/Navbar";
import Modal from "../components/atoms/Modal";
import UnloggedRouter from "../routings/UnloggedRouter";

const UnloggedTemplate = () => {
  return (
    <>
      <Navbar />
      <Modal />
      <UnloggedRouter />
    </>
  );
};

export default UnloggedTemplate;
