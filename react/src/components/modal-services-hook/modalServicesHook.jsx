import { useState } from "react";
import TypeOfModal from "../../repository/ModalType";

const modalServicesHook = () => {
  const [openModal, setOpenModal] = useState(false);
  const [objContent, setObjContent] = useState(null);

  const typeOfModal = TypeOfModal

  const handleOpenModal = (obj) => {
    setOpenModal(true);
    setObjContent(obj);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  };
};

export default modalServicesHook;
