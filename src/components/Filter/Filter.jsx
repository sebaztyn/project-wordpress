import React, { useState } from "react";
import Select from "react-select";

import { FilterContainer, FilterContentContainer } from "./Filter.style";

const parentOptions = {
  payment_status: [
    { value: "", label: "Select a Payment Status", isDisabled: true },
    { value: "NOT APPLICABLE", label: "NOT APPLICABLE", key: "payment_status" },
    { value: "NOT PAID", label: "NOT PAID", key: "payment_status" },
    { value: "PAID", label: "PAID", key: "payment_status" },
  ],
  role_name: [
    { value: "", label: "Select a Role", isDisabled: true },
    { value: "admin", label: "Admin", key: "role_name" },
    { value: "default_user", label: "User", key: "role_name" },
  ],
};

const Filter = ({ selectedOption, handleChange }) => {
  return (
    <FilterContainer>
      {Object.keys(parentOptions).map((key, index) => {
        return (
          <Select
            key={index}
            value={selectedOption[key]}
            onChange={handleChange}
            options={parentOptions[key]}
            id={key}
            placeholder={`Select a ${
              key === "role_name" ? "Role" : "Payment Status"
            }`}
          />
        );
      })}
    </FilterContainer>
  );
};

export default Filter;
