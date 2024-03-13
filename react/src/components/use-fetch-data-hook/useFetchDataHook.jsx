import { useState, useEffect } from "react";

const useFetchDataHook = (fetchFunction, parameter = "", initialData = "") => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunction(parameter);
        setData(result);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup code here
    };
  }, [fetchFunction]);

  return { data, isLoading, error };
};

export default useFetchDataHook;
