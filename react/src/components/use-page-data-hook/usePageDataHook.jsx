import { useEffect } from "react";
import { CalcDifViewHeigh, IsMobile } from "../../util/generalFunctions";
import modalServicesHook from "../../components/modal-services-hook/modalServicesHook";
import { testConnection, fetchGeneralCards } from "../../api/api";
import useFetchDataHook from "../../components/use-fetch-data-hook/useFetchDataHook";

const usePageData = (page) => {
  const isMobile = IsMobile();
  const calcDifViewHeigh = CalcDifViewHeigh();

  const {
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
  } = modalServicesHook();

  // const { data: testConnectionResult } = useFetchDataHook(testConnection);
  // console.log("🚀 ~ CurrentPage ~ testConnectionResult:", testConnectionResult);

  const {
    data: pageContent,
    isLoading,
    error,
  } = useFetchDataHook(fetchGeneralCards, page, "");
  // console.log(`🚀 ~ ${page} CurrentPage ~ pageContent:`, pageContent);

  useEffect(() => {
    if (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }, [error]);

  return {
    isMobile,
    calcDifViewHeigh,
    openModal,
    handleOpenModal,
    handleCloseModal,
    objContent,
    typeOfModal,
    pageContent,
    isLoading,
    error,
  };
};

export default usePageData;
