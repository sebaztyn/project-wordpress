import axios from 'axios';
import { createContext, useState } from 'react';

export const videoContext = createContext();
const VideoContextProvider = ({ children }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadResult, setUploadResult] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoFile, setVideoFile] = useState({
    file: null,
    fileName: null,
  });
  const onFileChange = (evt) => {
    setVideoFile({
      file: evt.target.files[0],
      fileName: evt.target.files[0].name.replace(/\s/gi, '_'),
    });
  };
  const fileTitleHandler = (evt) => {
    setVideoTitle(evt.target.value);
  };
  const uploadData = async ({ parsedData, file }) => {
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
      setIsUploading(() => false);
      setUploadResult(result);
    } catch (error) {
      setIsUploading(() => false);
      console.log('uploadError :>> ', error);
    }
  };
  return (
    <videoContext.Provider
      value={{
        uploadData,
        isUploading,
        uploadResult,
        uploadProgress,
        onFileChange,
        videoFile,
        fileTitleHandler,
        videoTitle,
        setVideoTitle,
        setVideoFile,
      }}
    >
      {children}
    </videoContext.Provider>
  );
};

export default VideoContextProvider;
