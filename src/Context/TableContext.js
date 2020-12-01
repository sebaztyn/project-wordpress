import React, { useEffect, createContext, useState } from "react";
import axiosInstance from "../utils/fetchData";
import useRefreshToken from "../utils/useRefreshToken";

export const tableContext = createContext();

const TableProvider = ({ children }) => {
  // const { token, setToken } = useContext(globalContext);
  const [allOptions, setAllOptions] = useState({
    role_name: "",
    payment_status: "",
  });
  const { token, isLoading } = useRefreshToken();
  const [loading, setLoading] = useState(isLoading);
  const [tableData, setTableData] = useState({});
  const [adminData, setAdminData] = useState({});
  useEffect(() => {
    if (!isLoading && token) {
      fetchData();
    }
  }, [token, isLoading, allOptions.payment_status, allOptions.role_name]);

  const fetchData = async () => {
    // setLoading(() => true);
    const keys = Object.keys(allOptions);
    const paramsObj = {};
    keys.map((key) => {
      paramsObj[key] = allOptions[key].value;
    });
    try {
      const [result, resultTwo] = await Promise.all([
        axiosInstance(token)("auth/count_admin", {
          method: "GET",
          params: paramsObj,
          // params: {},
        }),
        axiosInstance(token)("admin", {
          method: "GET",
          // params: {},
        }),
      ]);
      setTableData(result.data);
      setAdminData(resultTwo.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error :>> ", error);
    }
  };
  const handleChange = (selectedOption) => {
    const obj = {};
    Object.keys(allOptions).map((data, index) => {
      obj[data] = "";
    });
    setAllOptions({ ...obj, [selectedOption.key]: selectedOption });
  };
  return (
    <tableContext.Provider
      value={{
        adminData,
        tableData,
        loading,
        setLoading,
        selectedOption: allOptions,
        setSelectedOption: setAllOptions,
        handleChange,
      }}
    >
      {children}
    </tableContext.Provider>
  );
};

export default TableProvider;
