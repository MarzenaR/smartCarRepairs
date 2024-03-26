const initialState = {
  manageModal: {
    modalType: "login",
    additonalInfo: "",
    isModalOpen: false,
    onDelete: "",
  },
  currentUser: null,

};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "OPEN_MODAL":
      return {
        ...state,
        manageModal: {
          modalType: payload.modalType,
          additonalInfo: payload.additonalInfo,
          collectionName: payload.collectionName,
          objectId: payload.objectId,
          isModalOpen: true,
        },
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        manageModal: {
          ...state.manageModal,
          isModalOpen: false,
        },
      };

    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
