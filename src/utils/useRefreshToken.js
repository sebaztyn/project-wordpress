import { useEffect, useState } from "react";
import { refreshToken } from "./tokenAccess";

const useRefreshToken = () => {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchRefresh = async () => {
      try {
        const token = await refreshToken();
        setToken(token);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchRefresh();
  }, []);
  return {
    token,
    error,
    isLoading,
  };
};

export default useRefreshToken;
