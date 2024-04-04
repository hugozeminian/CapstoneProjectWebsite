{
  /*
This code defines a custom hook named modalServicesHook, which manages the state and content of a modal.
It utilizes the useState hook from React to manage the modal's open state and content. 
Additionally, it imports an enum TypeOfModal from the ModalType repository to define different types of modals. 
The hook provides functions handleOpenModal and handleCloseModal to control the modal's visibility and content.
 */
}

import { useEffect, useRef, useState } from "react";
import TypeOfModal from "../../repository/ModalType";
import { updateGeneralCards, updateSettings } from "../../api/api";

// Custom hook for managing modal state and content
const ModalServicesHook = () => {
  // State variables for modal state and content
  const [openModal, setOpenModal] = useState(false);
  const [objKeyContentModal, setObjKeyContentModal] = useState(null);
  const [objContentModal, setObjContentModal] = useState(null);
  const [objIndexContentModal, setObjIndexContentModal] = useState(null);
  const [fullArrayContentModal, setFullArrayContentModal] = useState(null);
  const [toggleSwitch, setToggleSwitch] = useState(null);

  const [toggleUpdateButtonModal, setToggleUpdateButtonModal] = useState(null);

  // Enum for different types of modal
  const typeOfModal = TypeOfModal;

  // Function to handle with toggle switch (not modal)
  const handleToggleSwitch = (
    objKey = null,
    obj,
    objIndex = null,
    fullArrayContent = null
  ) => {
    setToggleSwitch(!toggleSwitch);
    setObjKeyContentModal(objKey);
    setObjContentModal(obj);
    setObjIndexContentModal(objIndex);
    setFullArrayContentModal(fullArrayContent);
  };

  useEffect(() => {
    handleUpdateDateModal();
  }, [toggleSwitch]);

  // Function to handle opening modal and setting content
  const handleOpenModal = (
    objKey = null,
    obj,
    objIndex = null,
    fullArrayContent = null
  ) => {
    setOpenModal(true);
    setObjKeyContentModal(objKey);
    setObjContentModal(obj);
    setObjIndexContentModal(objIndex);
    setFullArrayContentModal(fullArrayContent);
  };

  // Function to handle closing modal (cancel button)
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  // Function to handle closing modal (update button)
  const handleCloseModalAfterUpdate = () => {
    setOpenModal(false);
    setToggleUpdateButtonModal(!toggleUpdateButtonModal);
  };

  // Function to handle when fields change information
  const handleOnChangeFieldsModal = (event, index) => {
    const { name, value } = event.target;
    setObjContentModal((prevobjContentModal) => {
      if (Array.isArray(prevobjContentModal)) {
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
        // console.log("🚀 ~ Previous state:", prevobjContentModal);
        // console.log("🚀 ~ Updated state:", updatedContent);
        return updatedContent; // Return the updated state
      } else {
        console.log(
          "handleOnChangeFieldsModal - objContentModal is not an array"
        );
        return prevobjContentModal; // Return the unchanged state
      }
    });
  };

  // Function to handle when fields change information
  const handleOnChangeImagesModal = (props) => {
    const { selectedFile, index } = props ?? {};
    // console.log("🚀 ~ handleOnChangeFields ~ props:", props);

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
      // console.log("🚀 ~ Previous state:", prevContent);
      // console.log("🚀 ~ Updated state:", updatedContent);
      return updatedContent; // Return the updated state
    });
  };

  // Function to handle update data
  const handleUpdateDateModal = async () => {
    if (fullArrayContentModal && objIndexContentModal !== null) {
      try {
        // Extract the index from objIndexContentModal
        const nestedArrayIndex = objIndexContentModal[0];

        // Extract the updated content from objContentModal
        const updatedContent = objContentModal[0];

        // Create a new array with the replaced element
        const updatedContentModal = [
          ...fullArrayContentModal.slice(0, nestedArrayIndex),
          updatedContent,
          ...fullArrayContentModal.slice(nestedArrayIndex + 1),
        ];
        console.log("🚀 ~ handleUpdateDateModal ~ updatedContentModal:", {
          [objKeyContentModal]: updatedContentModal,
        });

        // Update settings social media
        await updateSettings({ [objKeyContentModal]: updatedContentModal });
        handleCloseModalAfterUpdate();
      } catch (error) {
        console.error("Error updating settings social media:", error);
      }
      return;
    }

    if (objKeyContentModal) {
      try {
        // Update settings contact me
        console.log(
          "🚀 ~ handleUpdateDateModal ~ contact { [objKeyContentModal]: objContentModal }:",
          { [objKeyContentModal]: objContentModal }
        );
        await updateSettings({ [objKeyContentModal]: objContentModal });
        handleCloseModalAfterUpdate();
      } catch (error) {
        console.error("Error updating settings contact me:", error);
      }
      return;
    }

    if (!Array.isArray(objContentModal)) {
      // console.log("handleUpdateDateModal - objContentModal is not an array");
      return;
    }

    try {
      // Update general cards
      await Promise.all(
        objContentModal.map((data) => {
          console.log(
            "🚀 ~ handleUpdateDateModal ~ data.reference, data:",
            data.reference,
            data
          );
          updateGeneralCards(data.reference, data);
        })
      );

      handleCloseModalAfterUpdate();
    } catch (error) {
      console.error("Error updating general cards:", error);
    }
  };

  // const handleUpdateDateModal = () => {
  //   if (objKeyContentModal) {
  //     console.log({ [objKeyContentModal]: objContentModal });
  //     updateSettings({ [objKeyContentModal]: objContentModal });
  //   } else {
  //     if (Array.isArray(objContentModal)) {
  //       // console.log(objContentModal);
  //       objContentModal.map((data) => {
  //         console.log(data.reference);
  //         console.log(data);

  //         // const formData = new FormData(data)
  //         // console.log("🚀 ~ objContentModal.map ~ formData:", formData)
  //         // formData.append("imagefile", imageRef.current.files[0]);
  //         // console.log({...data, imagefile: formData});

  //         /////////////////////////////////////////////////////////////////////////////////

  //         // const formData = new FormData();
  //         // formData.append("imagefile", imageRef.current.files[0]);
  //         // formData.append("page", data.page); // Replace 'page' with the actual value
  //         // formData.append("section", data.section); // Replace 'section' with the actual value
  //         // formData.append("title", data.title); // Replace 'title' with the actual value
  //         // formData.append("description", data.description); // Replace 'description' with the actual value
  //         // formData.append("date_info", data.dateInfo); // Replace 'dateInfo' with the actual value

  //         /////////////////////////////////////////////////////////////////////////////////

  //         updateGeneralCards(data.reference, data);

  //         // ///////////////////////////////////////////
  //         // const formData = new FormData();
  //         // formData.append("imagefile", imageRef.current.files[0]);
  //         // formData.append("page", page); // Replace 'page' with the actual value
  //         // formData.append("section", section); // Replace 'section' with the actual value
  //         // formData.append("title", title); // Replace 'title' with the actual value
  //         // formData.append("description", description); // Replace 'description' with the actual value
  //         // formData.append("date_info", dateInfo); // Replace 'dateInfo' with the actual value

  //         // // Make a POST request to your API
  //         // const response = await api.uploadGeneralCard(imageId, formData);
  //         // ///////////////////////////////////////////
  //       });

  //     } else {
  //       console.log("objContentModal is not an array");
  //     }
  //     handleCloseModal();
  //     setToggleUpdateButtonModal(!toggleUpdateButtonModal);
  //   }
  // };

  // Returning state variables and functions as an object
  return {
    openModal,
    objContentModal,
    typeOfModal,
    toggleUpdateButtonModal,
    handleToggleSwitch,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
  };
};

export default ModalServicesHook;
