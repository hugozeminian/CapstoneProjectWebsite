import { useEffect, useState } from "react";
import TypeOfModal from "../../repository/ModalType";
import { updateGeneralCards, updateSettings } from "../../api/api";

/**
 * Custom hook for managing modal state and content.
 * @returns {object} An object containing state variables and functions for managing modals.
 */
const ModalServicesHook = () => {
  // State variables for modal state and content
  const [openModal, setOpenModal] = useState(false);
  const [objKeyContentModal, setObjKeyContentModal] = useState(null);
  const [objContentModal, setObjContentModal] = useState(null);
  const [objIndexContentModal, setObjIndexContentModal] = useState(null);
  const [fullArrayContentModal, setFullArrayContentModal] = useState(null);
  const [isObjField, setIsObjField] = useState({});
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [toggleUpdateButtonModal, setToggleUpdateButtonModal] = useState(false);

  // Enum for different types of modal
  const typeOfModal = TypeOfModal;

  /**
   * Handles toggling certain switches.
   * @param {string} objKey - Key of the object.
   * @param {object} obj - Object content.
   * @param {number} objIndex - Index of the object.
   * @param {array} fullArrayContent - Full array content.
   */
  const handleToggleSwitch = (
    objKey = null,
    obj,
    objIndex = null,
    fullArrayContent = null
  ) => {
    setToggleSwitch(true);
    setObjKeyContentModal(objKey);
    setObjContentModal(obj);
    setObjIndexContentModal(objIndex);
    setFullArrayContentModal(fullArrayContent);
  };

  useEffect(() => {
    handleUpdateDateModal();
  }, [toggleSwitch]);

  /**
   * Handles opening modal and setting content.
   * @param {string} objKey - Key of the object.
   * @param {object} obj - Object content.
   * @param {number} objIndex - Index of the object.
   * @param {array} fullArrayContent - Full array content.
   */
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

  /**
   * Handles closing modal (cancel button).
   */
  const handleCloseModal = () => {
    setIsObjField({});
    setOpenModal(false);
  };

  /**
   * Handles closing modal (update button).
   */
  const handleCloseModalAfterUpdate = () => {
    setOpenModal(false);
    setToggleSwitch(true);
    setToggleUpdateButtonModal(true);
  };

  /**
   * Handles when fields change information.
   * @param {object} event - Event object.
   * @param {number} index - Index of the field.
   */
  const handleOnChangeFieldsModal = (event, index) => {
    const { name, value } = event.target;

    setObjContentModal((prevobjContentModal) => {
      if (Array.isArray(prevobjContentModal)) {
        const updatedContent = prevobjContentModal.map((item, i) => {
          if (i === index) {
            setIsObjField({ ...isObjField, [name]: value });
            // Update the object at the specified index
            return {
              ...item,
              [name]: value,
            };
          }
          return item; // Return unchanged for other items
        });
        return updatedContent; // Return the updated state
      } else {
        return prevobjContentModal; // Return the unchanged state
      }
    });
  };

  /**
   * Handles when fields change information for images.
   * @param {object} props - Props object.
   */
  const handleOnChangeImagesModal = (props) => {
    const { selectedFile, index } = props ?? {};

    setObjContentModal((prevobjContentModal) => {
      // Initialize prevobjContentModal to an empty array if it's null
      const prevContent = prevobjContentModal || [];

      const updatedContent = prevContent.map((item, i) => {
        if (i === index) {
          setIsObjField({ ...isObjField, imagefile: selectedFile });
          // Update the object at the specified index
          return {
            ...item,
            imagefile: selectedFile,
          };
        }
        return item; // Return unchanged for other items
      });

      return updatedContent; // Return the updated state
    });
  };

  /**
   * Handles updating data in the modal.
   */
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
        await updateSettings({ [objKeyContentModal]: objContentModal });
        handleCloseModalAfterUpdate();
      } catch (error) {
        console.error("Error updating settings contact me:", error);
      }
      return;
    }

    if (!Array.isArray(objContentModal)) {
      return;
    }

    try {
      // Update general cards
      await Promise.all(
        objContentModal.map(async (data) => {
          const formData = new FormData();

          const keysToSkip = ["id", "image_path", "created_at", "updated_at"];

          for (const [key, value] of Object.entries(data)) {
            // Skip keys present in keysToSkip array
            if (keysToSkip.includes(key)) {
              continue;
            }

            if (value === null) {
              formData.append(key, "");
            } else {
              formData.append(key, value);
            }
          }
          await updateGeneralCards(data.reference, formData);
        })
      );

      handleCloseModalAfterUpdate();
    } catch (error) {
      console.error("Error updating general cards:", error);
    }
  };

  // Returning state variables and functions as an object
  return {
    openModal,
    objContentModal,
    typeOfModal,
    toggleUpdateButtonModal,
    isObjField,
    toggleSwitch,
    handleToggleSwitch,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
  };
};

export default ModalServicesHook;
