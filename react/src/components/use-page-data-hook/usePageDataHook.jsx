import { useEffect } from "react";
import { CalcDifViewHeigh, IsMobile } from "../../util/generalFunctions";
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook";
import { testConnection, fetchGeneralCards } from "../../api/api";
import useFetchDataHook from "../../components/use-fetch-data-hook/useFetchDataHook";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useLocalDataRepositoryOnly  } from "../../context/LocalDataRepositoryOnlyContext";

const usePageData = (page) => {
  const isMobile = IsMobile();
  const calcDifViewHeigh = CalcDifViewHeigh();
  
  const {
    openModal,
    objContentModal,
    typeOfModal,
    handleOpenModal,
    handleCloseModal,
    handleOnChangeFieldsModal,
    handleOnChangeImagesModal,
    handleUpdateDateModal,
  } = modalServicesHook();

  // const { data: testConnectionResult } = useFetchDataHook(testConnection);
  // console.log("🚀 ~ CurrentPage ~ testConnectionResult:", testConnectionResult);

  const {
    data: pageContent,
    isLoading,
    error,
  } = useFetchDataHook(fetchGeneralCards, page, "");
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
