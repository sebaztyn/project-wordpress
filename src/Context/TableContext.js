import React, { useEffect, createContext, useState } from "react";
import axiosInstance from "../utils/fetchData";

export const tableContext = createContext();

const TableProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(() => true);
        const result = await axiosInstance()("auth/count_admin", {
          method: "GET",
        });
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("error :>> ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <tableContext.Provider value={{ loading, setLoading }}>
      {children}
    </tableContext.Provider>
  );
};

export default TableProvider;
