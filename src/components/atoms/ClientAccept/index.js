import React from "react";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { bookingsJobsCollection } from "../../../firebase/firestoreUtils";
import { ButtonsWrapper } from "./StyledClientAccept";

const ClientAccept = ({ bookingJob }) => {
  const handleAcceptClick = () => {
    bookingsJobsCollection
      .doc(bookingJob.bookingId)
      .update({
        status: "accepted",
      })
      .then(() => window.location.reload());
  };

  const handleDeleteClick = () => {
    bookingsJobsCollection
      .doc(bookingJob.bookingId)
      .delete()
      .then(() => window.location.reload());
  };

  return (
    <ButtonsWrapper>
      <Button
        onClick={handleAcceptClick}
        type="button"
        variant="outlined"
        startIcon={<SendIcon />}
      >
        Accept booking
      </Button>
      <Button
        onClick={handleDeleteClick}
        type="button"
        variant="outlined"
        startIcon={<DeleteIcon />}
      >
        Delete booking
      </Button>
    </ButtonsWrapper>
  );
};

export default ClientAccept;
