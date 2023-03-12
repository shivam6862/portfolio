import { useState, useEffect } from "react";

export const useProtectedResources = (url, defaultValue) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    const loadResources = async () => {
      const response = await fetch(url, {
        headers: {},
      });
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    };
    loadResources();
  }, []);

  return { isLoading, data, setData };
};
