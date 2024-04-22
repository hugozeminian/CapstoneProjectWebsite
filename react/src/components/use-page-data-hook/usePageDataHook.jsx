import { useEffect } from "react";
import { CalcDifViewHeigh, IsMobile } from "../../util/generalFunctions";
import ModalServicesHook from "../modal-services-hook/modalServicesHook";
import UseFetchDataHook from "../use-fetch-data-hook/UseFetchDataHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useLocalDataRepositoryOnly } from "../../context/LocalDataRepositoryOnlyContext";
const usePageData = (page, fetchFunction) => {
  const isMobile = IsMobile();
  const calcDifViewHeigh = CalcDifViewHeigh();
  const {
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
  } = ModalServicesHook();

  // const { data: testConnectionResult } = UseFetchDataHook(testConnection);
  // console.log("🚀 ~ CurrentPage ~ testConnectionResult:", testConnectionResult);

  const {
    data: pageContent,
    isLoading,
    error,
  } = UseFetchDataHook(
    fetchFunction,
    page,
    "",
    toggleUpdateButtonModal,
    toggleSwitch
  );

  // Every time page change, verify the token time (to expire in 24 hours)
  useEffect(() => {
    const handlePageOpen = () => {
      const timestamp = parseInt(localStorage.getItem("tokenTimeBrowser"));
      const storedData = new Date(timestamp);

      if (storedData) {
        console.log("🚀 ~ handleWindowOpen ~ storedData:", storedData);
        const twentyFourHours = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        const currentTime = new Date().getTime();

        // Check if 24 hours have passed since the data was stored
        if (currentTime - storedData > twentyFourHours) {
          // Delete data from local storage
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("user");
          localStorage.removeItem("tokenTimeBrowser");
          window.location.reload();
        }
      }
    };

    handlePageOpen();
  }, [page]);

  const { localDataRepositoryOnly } = useLocalDataRepositoryOnly();

  useEffect(() => {
    if (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }, [error]);

  return {
    FontAwesomeIcon,
    faSpinner,
    localDataRepositoryOnly,
    isMobile,
    calcDifViewHeigh,
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
    pageContent,
    isLoading,
    error,
  };
};

export default usePageData;
