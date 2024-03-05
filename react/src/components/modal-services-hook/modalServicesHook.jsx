{/*
This code defines a custom hook named modalServicesHook, which manages the state and content of a modal.
It utilizes the useState hook from React to manage the modal's open state and content. 
Additionally, it imports an enum TypeOfModal from the ModalType repository to define different types of modals. 
The hook provides functions handleOpenModal and handleCloseModal to control the modal's visibility and content.
 */}

import { useState } from "react";
import TypeOfModal from "../../repository/ModalType";

// Custom hook for managing modal state and content
const modalServicesHook = () => {
  // State variables for modal state and content
  const [openModal, setOpenModal] = useState(false);
  const [objContent, setObjContent] = useState(null);
  
  // Enum for different types of modal
  const typeOfModal = TypeOfModal

  // Function to handle opening modal and setting content
  const handleOpenModal = (obj) => {
    setOpenModal(true);
    setObjContent(obj);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Returning state variables and functions as an object
  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  };
};

export default modalServicesHook; // Exporting modalServicesHook as default
