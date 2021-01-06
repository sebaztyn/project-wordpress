import axios from 'axios';
import { useEffect, useState } from 'react';

const useUploadVideo = ({ parsedData, file }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  useEffect(() => {
    const uploadData = async () => {
      setIsUploading(() => true);
      try {
        const formData = new FormData();
        Object.keys(parsedData.fields).forEach((data) => {
          formData.append(data, parsedData.fields[data]);
        });
        formData.append('file', file);
        const result = await axios({
          url: parsedData.url,
          data: formData,
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' },
          onUploadProgress: (evt) => {
            setUploadProgress(Math.floor((evt.loaded * 100) / evt.total));
          },
        });
        console.log('uploaded-result', result);
        setIsUploading(() => false);
        setUploadResult(result);
      } catch (error) {
        setIsUploading(() => false);
        console.log('uploadError :>> ', error);
      }
    };
    uploadData();
  }, []);

  // return new Promise((resolve, reject) => {
  // const xhr = new XMLHttpRequest();
  // const formData = new FormData();
  // Object.keys(parsedData.fields).forEach((data) => {
  //   formData.append(data, parsedData.fields[data]);
  // });
  // formData.append('file', file);
  // xhr.open('POST', parsedData.url);
  // xhr.responseType = 'json';
  // xhr.onerror = (error) => {
  //   reject(error);
  // };
  // xhr.onload = () => {
  //   if (xhr.status > 200 && xhr.status < 300) {
  //     resolve({
  //       statusCode: xhr.status,
  //       message: 'video uploaded successfully',
  //     });
  //   } else {
  //     reject({
  //       status: xhr.status,
  //       message: xhr.statusText,
  //     });
  //   }
  // };
  // xhr.upload.onprogress = (event) => {
  //   const uploadProgress = `${Math.floor(
  //     (event.loaded * 100) / event.total,
  //   )}% completed`;
  // };
  // xhr.send(formData);
  // });
  return { uploadProgress, uploadResult, isUploading };
};

export default useUploadVideo;
