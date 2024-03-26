export const openModal = (
  modalType,
  additonalInfo,
  collectionName,
  objectId
) => {
  return {
    type: "OPEN_MODAL",
    payload: {
      modalType,
      additonalInfo,
      collectionName,
      objectId,
    },
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
  };
};

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};
