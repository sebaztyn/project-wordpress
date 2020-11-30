import React, { useEffect, createContext, useState } from "react";
import axiosInstance from "../utils/fetchData";
import useRefreshToken from "../utils/useRefreshToken";

export const tableContext = createContext();

const TableProvider = ({ children }) => {
  // const { token, setToken } = useContext(globalContext);
  const { token, isLoading } = useRefreshToken();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState(false);
  useEffect(() => {
    if (!isLoading && token) {
      fetchData();
    }
  }, [token, isLoading]);

  const fetchData = async () => {
    try {
      const result = await axiosInstance(token)("auth/count_admin", {
        method: "GET",
        params: {},
      });
      setLoading(false);
      setTableData(result.data);
    } catch (error) {
      setLoading(false);
      console.log("error :>> ", error);
    }
  };
  return (
    <tableContext.Provider value={{ tableData, loading, setLoading }}>
      {children}
    </tableContext.Provider>
  );
};

export default TableProvider;
