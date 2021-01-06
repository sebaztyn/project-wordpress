import { useContext, useEffect, useRef, useState } from 'react';
import { videoContext } from '../../Context/VideoContext';
import axiosInstance from '../../utils/fetchData';
import useRefreshToken from '../../utils/useRefreshToken';

const Videos = () => {
  const fileInputRef = useRef(null);
  const { token, isLoading } = useRefreshToken();
  const [awsUrl, setAwsUrl] = useState('');
  const {
    uploadData,
    isUploading,
    uploadResult,
    uploadProgress,
    onFileChange,
    videoFile,
    fileTitleHandler,
    videoTitle,
    setVideoFile,
    setVideoTitle,
  } = useContext(videoContext);
  useEffect(() => {
    const saveVideo = async () => {
      try {
        if (
          uploadResult &&
          uploadResult.status > 200 &&
          uploadResult.status < 300
        ) {
          const data = {
            url: `${awsUrl}/recdel-video-${videoFile.fileName}`,
            title: videoTitle,
          };
          const result = await axiosInstance(token)('/upload/new', {
            method: 'POST',
            data,
          });
          if (result.status === 200 || result.status === 201) {
            console.log('Hello>>>>>>>>>>');
            setVideoFile({
              file: null,
              fileName: null,
            });
            setVideoTitle('');
            fileInputRef.current.value = null;
          }
        }
      } catch (error) {
        console.log('Error saving video url :>> ', error);
      }
    };
    saveVideo();
  }, [uploadResult]);
  const submitVideoHandler = async (e) => {
    const response = await axiosInstance(token)('/upload', {
      method: 'POST',
      // origin: 'http://127.0.0.1:8080',
      data: { filename: videoFile.fileName },
    });
    const parsedData = response.data;
    setAwsUrl(parsedData.url);
    await uploadData({ parsedData, file: videoFile.file });
  };
  return (
    <div>
      <h3>Data upload</h3>
      <input
        type='text'
        name='title'
        onChange={fileTitleHandler}
        value={videoTitle}
        placeholder='Enter video title'
      />
      <br />
      <input
        type='file'
        name='videoFile'
        id=''
        onChange={onFileChange}
        ref={fileInputRef}
      />
      <button type='submit' onClick={submitVideoHandler}>
        Upload Video
      </button>
      {isUploading ? (
        <div>
          Upload: {uploadProgress}%.&nbsp;
          <br />
          {uploadProgress === 100 ? 'Saving, please wait....' : null}
        </div>
      ) : null}
    </div>
  );
};

export default Videos;
