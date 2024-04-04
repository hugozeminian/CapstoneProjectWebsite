import { useState, useEffect } from "react";

const UseFetchDataHook = (fetchFunction, parameter = "", initialData = "", toggleUpdateButtonModal, toggleSwitch) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction(parameter);
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code here
    };
  }, [fetchFunction, parameter, toggleUpdateButtonModal, toggleSwitch]);

  return { data, isLoading, error };
};

export default UseFetchDataHook;
