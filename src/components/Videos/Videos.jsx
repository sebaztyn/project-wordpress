import React, { useState } from "react";
import uploadVideo from "../../utils/uploadVideo";

const Videos = () => {
  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const data = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: JSON.stringify({ filename: file.name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const parsedData = await data.json();
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
