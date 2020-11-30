import React, { useContext } from "react";
import axiosInstance from "../../utils/fetchData";
import uploadVideo from "../../utils/uploadVideo";
import { globalContext } from "../../Context/GlobalContext.js";

const Videos = () => {
  const { token } = useContext(globalContext);
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const response = await axiosInstance(token)("/upload", {
      method: "POST",
      origin: "http://127.0.0.1:8080",
      data: { filename: file.name },
    });
    // const parsedData = await data.json();
    const parsedData = response.data;
    const uploadedResult = await uploadVideo({ parsedData, file });
    console.log("uploadedResult :>> ", uploadedResult);
    // const formData = new FormData();
    // Object.keys(parsedData.fields).forEach((data) => {
    //   formData.append(data, parsedData.fields[data]);
    // });
    // formData.append("file", file);
    // const uploadedData = await fetch(parsedData.url, {
    //   method: "POST",
    //   body: formData,
    // });
    // const parsedUpload = await uploadedData.json();
    // console.log("data :>> ", parsedUpload.Location);
  };
  return (
    <div>
      <h3>Data upload</h3>
      <input type="file" name="videoFile" id="" onChange={onFileChange} />
    </div>
  );
};

export default Videos;
