import { useEffect } from "react";
import { CalcDifViewHeigh, IsMobile } from "../../util/generalFunctions";
import ModalServicesHook from "../modal-services-hook/ModalServicesHook";
import UseFetchDataHook from "../use-fetch-data-hook/UseFetchDataHook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLocalDataRepositoryOnly  } from "../../context/LocalDataRepositoryOnlyContext";

const usePageData = (page, fetchFunction) => {
  const isMobile = IsMobile();
  const calcDifViewHeigh = CalcDifViewHeigh();
  
  const {
    openModal,
    objContentModal,
    typeOfModal,
    toggleUpdateButtonModal,
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
  } = UseFetchDataHook(fetchFunction, page, "", toggleUpdateButtonModal);
  // console.log(`🚀 ~ ${page} CurrentPage ~ pageContent:`, pageContent);

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
