import React, { useEffect, createContext, useState } from "react";
import axiosInstance from "../utils/fetchData";
import useRefreshToken from "../utils/useRefreshToken";

export const tableContext = createContext();

const TableProvider = ({ children }) => {
  // const { token, setToken } = useContext(globalContext);
  const { token, isLoading } = useRefreshToken();
  const [loading, setLoading] = useState(false);
  const [tableData, setTableData] = useState({});
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    if (!isLoading && token) {
      fetchData();
    }
  }, [token, isLoading]);

  const fetchData = async () => {
    try {
      const [result, resultTwo] = await Promise.all([
        axiosInstance(token)("auth/count_admin", {
          method: "GET",
          // params: {},
        }),
        axiosInstance(token)("admin", {
          method: "GET",
          // params: {},
        }),
      ]);
      setLoading(false);
      setTableData(result.data);
      setAdminData(resultTwo.data);
    } catch (error) {
      setLoading(false);
      console.log("error :>> ", error);
    }
  };
  return (
    <tableContext.Provider
      value={{ adminData, tableData, loading, setLoading }}
    >
      {children}
    </tableContext.Provider>
  );
};

export default TableProvider;
