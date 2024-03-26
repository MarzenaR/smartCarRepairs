import React from "react";
import Box from "@mui/material/Box";
import { Dialog, Modal as MaterialModal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/actions";
import LoginForm from "../../forms/LoginForm";
import RegisterForm from "../../forms/RegisterForm";
import EditUser from "../../atoms/EditUser";
import EditGarage from "../../atoms/EditGarage";
import ConfirmDelete from "../../atoms/ConfirmDelete";
import styled from "styled-components";
import BookingDetails from "../BookingDetails";
import ClientAccept from "../ClientAccept";
import GarageAccept from "../GarageAccept";

const StyledBox = styled(Box)`
  padding: 20px;
`;

const Modal = () => {
  const manageModal = useSelector((state) => state.manageModal);

  const dispatch = useDispatch();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="xs"
      open={manageModal.isModalOpen}
      onClose={() => dispatch(closeModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      scroll="body"
    >
      <StyledBox>
        {manageModal.modalType === "login" ? (
          <LoginForm />
        ) : manageModal.modalType === "register" ? (
          <RegisterForm />
        ) : manageModal.modalType === "bookingDetails" ? (
          <BookingDetails bookingJob={manageModal.additonalInfo} />
        ) : manageModal.modalType === "garageAccept" ? (
          <GarageAccept bookingJob={manageModal.additonalInfo} />
        ) : manageModal.modalType === "clientAccept" ? (
          <ClientAccept bookingJob={manageModal.additonalInfo} />
        ) : manageModal.modalType === "edit" ? (
          <EditUser user={manageModal.additonalInfo} />
        ) : manageModal.modalType === "editCarPkAdmin" ? (
          <EditGarage garage={manageModal.additonalInfo} />
        ) : manageModal.modalType === "delete" ? (
          <ConfirmDelete
            whatToDelete={manageModal.additonalInfo}
            collectionName={manageModal.collectionName}
            objectId={manageModal.objectId}
          />
        ) : null}
      </StyledBox>
    </Dialog>
  );
};

export default Modal;
