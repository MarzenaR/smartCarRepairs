import React from "react";
import { mainTheme } from "../../../globalStyles/themes/mainTheme";
import {
  StyledConfimDeleteWrapper,
  StyledDeleteBtn,
} from "./StylesConfirmDelete";
import { useDispatch } from "react-redux";
import { closeModal } from "../../../redux/actions";
import {
  usersCollection,
  bookingsJobsCollection,
  garagesCollection,
} from "../../../firebase/firestoreUtils";

const ConfirmDelete = ({
  children,
  bgColor = mainTheme.colors.redDelete,
  onCancel,
  type,
  whatToDelete,
  collectionName,
  objectId,
}) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    if (collectionName === "users") {
      usersCollection
        .doc(objectId)
        .delete()
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }

    if (collectionName === "bookings") {
      bookingsJobsCollection
        .doc(objectId)
        .delete()
        .then(() => window.location.reload())
        .catch((err) => console.log(err));
    }
  };

  return (
    <StyledConfimDeleteWrapper>
      <h2 className="info">Are you sure to delete this {whatToDelete}?</h2>
      <div className="btn-wrapper">
        <StyledDeleteBtn
          bgColor={"#033076"}
          onClick={() => dispatch(closeModal())}
          type={type}
        >
          Cancel
        </StyledDeleteBtn>
        <StyledDeleteBtn bgColor={bgColor} onClick={onDelete} type={type}>
          Delete
        </StyledDeleteBtn>
      </div>
    </StyledConfimDeleteWrapper>
  );
};

export default ConfirmDelete;
