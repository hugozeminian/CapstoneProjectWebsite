{
  /*
This code defines a custom hook named modalServicesHook, which manages the state and content of a modal.
It utilizes the useState hook from React to manage the modal's open state and content. 
Additionally, it imports an enum TypeOfModal from the ModalType repository to define different types of modals. 
The hook provides functions handleOpenModal and handleCloseModal to control the modal's visibility and content.
 */
}

import { useRef, useState } from "react";
import TypeOfModal from "../../repository/ModalType";
import { updateGeneralCards } from "../../api/api";

// Custom hook for managing modal state and content
const modalServicesHook = () => {
  // State variables for modal state and content
  const [openModal, setOpenModal] = useState(false);
  const [objContentModal, setObjContentModal] = useState(null);

  // Enum for different types of modal
  const typeOfModal = TypeOfModal;

  // Function to handle opening modal and setting content
  const handleOpenModal = (obj) => {
    setOpenModal(true);
    setObjContentModal(obj);
  };

  // Function to handle closing modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Function to handle when fields change information
  const handleOnChangeFieldsModal = (event, index) => {
    const { name, value } = event.target;
    console.log("🚀 ~ handleOnChangeFields ~ value:", value);
    console.log("🚀 ~ handleOnChangeFields ~ name:", name);
    console.log("🚀 ~ handleOnChangeFields ~ event.target:", event.target);
    setObjContentModal((prevobjContentModal) => {
      const updatedContent = prevobjContentModal.map((item, i) => {
        if (i === index) {
          // Update the object at the specified index
          return {
            ...item,
            [name]: value,
          };
        }
        return item; // Return unchanged for other items
      });
      console.log("🚀 ~ Previous state:", prevobjContentModal);
      console.log("🚀 ~ Updated state:", updatedContent);
      return updatedContent; // Return the updated state
    });
  };

  // Function to handle when fields change information
  const handleOnChangeImagesModal = (props) => {
    const { selectedFile, index } = props ?? {};
    console.log("🚀 ~ handleOnChangeFields ~ props:", props);
  
    setObjContentModal((prevobjContentModal) => {
      
      // Initialize prevobjContentModal to an empty array if it's null
      const prevContent = prevobjContentModal || [];
  
      const updatedContent = prevContent.map((item, i) => {
        if (i === index) {
          // Update the object at the specified index
          return {
            ...item,
            imagefile: selectedFile,
          };
        }
        return item; // Return unchanged for other items
      });
      console.log("🚀 ~ Previous state:", prevContent);
      console.log("🚀 ~ Updated state:", updatedContent);
      return updatedContent; // Return the updated state
    });
  };
  

  // Function to handle update data
  const handleUpdateDateModal = () => {
    if (Array.isArray(objContentModal)) {
      // console.log(objContentModal);
      objContentModal.map((data) => {
        console.log(data.reference);
        console.log(data);
        // const formData = new FormData(data)
        // console.log("🚀 ~ objContentModal.map ~ formData:", formData)
        // formData.append("imagefile", imageRef.current.files[0]);
        // console.log({...data, imagefile: formData});

        /////////////////////////////////////////////////////////////////////////////////

        // const formData = new FormData();
        // formData.append("imagefile", imageRef.current.files[0]);
        // formData.append("page", data.page); // Replace 'page' with the actual value
        // formData.append("section", data.section); // Replace 'section' with the actual value
        // formData.append("title", data.title); // Replace 'title' with the actual value
        // formData.append("description", data.description); // Replace 'description' with the actual value
        // formData.append("date_info", data.dateInfo); // Replace 'dateInfo' with the actual value

        /////////////////////////////////////////////////////////////////////////////////

        updateGeneralCards(data.reference, data);

        // ///////////////////////////////////////////
        // const formData = new FormData();
        // formData.append("imagefile", imageRef.current.files[0]);
        // formData.append("page", page); // Replace 'page' with the actual value
        // formData.append("section", section); // Replace 'section' with the actual value
        // formData.append("title", title); // Replace 'title' with the actual value
        // formData.append("description", description); // Replace 'description' with the actual value
        // formData.append("date_info", dateInfo); // Replace 'dateInfo' with the actual value

        // // Make a POST request to your API
        // const response = await api.uploadGeneralCard(imageId, formData);
        // ///////////////////////////////////////////

        // window.location.reload();
      });
    } else {
      console.log("objContentModal is not an array");
    }
  };

  // Returning state variables and functions as an object
  return {
    openModal,
    objContentModal,
    typeOfModal,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
  };
};

export default modalServicesHook;
