import { useState, useEffect } from "react";

const UseFetchDataHook = (
  fetchFunction,
  pageParameter = "",
  initialData = "",
  toggleUpdateButtonModal,
  toggleSwitch
) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(pageParameter);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction(page);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        if (toggleSwitch || toggleUpdateButtonModal) {
          window.location.reload();
        } else {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code here
    };
  }, [fetchFunction, pageParameter, toggleUpdateButtonModal, toggleSwitch]);

  return { data, isLoading, error };
};

export default UseFetchDataHook;
