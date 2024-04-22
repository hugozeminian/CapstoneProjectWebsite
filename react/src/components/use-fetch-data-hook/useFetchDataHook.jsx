import { useState, useEffect } from "react";

/**
 * Custom hook for fetching data.
 * @param {Function} fetchFunction - Function to fetch data.
 * @param {string} [pageParameter=""] - Parameter for pagination.
 * @param {*} [initialData=""] - Initial data.
 * @param {boolean} toggleUpdateButtonModal - Flag to toggle update button in modal.
 * @param {boolean} toggleSwitch - Flag to toggle switch.
 * @returns {Object} Object containing data, loading state, and error.
 */
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
