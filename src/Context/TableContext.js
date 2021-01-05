import React, { useEffect, createContext, useState } from 'react';
import axiosInstance from '../utils/fetchData';
import { refreshToken } from '../utils/tokenAccess';
import useRefreshToken from '../utils/useRefreshToken';

export const tableContext = createContext();

const TableProvider = ({ children }) => {
  const [allOptions, setAllOptions] = useState({
    role_name: '',
    payment_status: '',
  });
  const { token, isLoading } = useRefreshToken();
  const [loading, setLoading] = useState(isLoading);
  const [tableData, setTableData] = useState({});
  const [adminData, setAdminData] = useState({});
  const [modal, setModal] = useState({ open: false, data: {} });
  useEffect(() => {
    if (!isLoading && token) {
      fetchData();
    }
  }, [token, isLoading, allOptions.payment_status, allOptions.role_name]);

  const fetchData = async () => {
    setLoading(() => true);
    const keys = Object.keys(allOptions);
    const paramsObj = {};
    keys.map((key) => {
      paramsObj[key] = allOptions[key].value;
    });
    try {
      const [result, resultTwo] = await Promise.all([
        axiosInstance(token)('auth/count_admin', {
          method: 'GET',
          params: paramsObj,
          // params: {},
        }),
        axiosInstance(token)('admin', {
          method: 'GET',
          // params: {},
        }),
      ]);
      setTableData(result.data);
      setAdminData(resultTwo.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('error :>> ', error);
    }
  };

  const displayUser = (evt) => {
    evt.preventDefault();
    const userData = tableData.rows.find(
      (row) => row.id === evt.currentTarget.dataset.userid,
    );
    setModal({ open: true, data: userData });
  };
  const handleChange = (selectedOption) => {
    const obj = {};
    Object.keys(allOptions).map((data, index) => {
      obj[data] = '';
    });
    setAllOptions({ ...obj, [selectedOption.key]: selectedOption });
  };

  const updateRecord = async (obj) => {
    setLoading(() => true);
    try {
      const tkn = await refreshToken();
      const updatedUser = await axiosInstance(tkn)('auth/update', {
        method: 'PUT',
        data: obj,
      });
      const filtered = tableData.rows
        ? tableData.rows.filter((item) => item.id !== updatedUser.data.data.id)
        : [];
      setTableData({
        ...tableData,
        rows: [updatedUser.data.data, ...filtered],
      });
      const updatedAdminData = await axiosInstance(token)('admin', {
        method: 'GET',
      });
      setAdminData(updatedAdminData.data);
      setLoading(() => false);
      return updatedUser;
    } catch (error) {
      setLoading(() => false);
      console.log('error :>> ', error);
    }
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
        displayUser,
        modal,
        setModal,
        updateRecord,
      }}
    >
      {children}
    </tableContext.Provider>
  );
};

export default TableProvider;
