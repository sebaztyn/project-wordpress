import { useContext, useEffect, useRef, useState } from 'react';
import { videoContext } from '../../Context/VideoContext';
import axiosInstance from '../../utils/fetchData';
import useRefreshToken from '../../utils/useRefreshToken';
import { NavContainer } from '../Header/Header.style';
import NavMenu from '../NavMenu/NavMenu';
import {
  VideoContainer,
  VideoSection,
  VideoTextInput,
  VideoTitle,
} from './Video.style';

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
    cancelUploadHandler,
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
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <VideoContainer>
        <VideoTitle>Video upload</VideoTitle>
        <VideoSection>
          <label htmlFor='video-title'>
            <span>Video title*</span>
            <VideoTextInput
              type='text'
              name='title'
              id='video-title'
              onChange={fileTitleHandler}
              value={videoTitle}
              placeholder='Enter video title'
            />
          </label>
          <input
            type='file'
            name='videoFile'
            id=''
            onChange={onFileChange}
            ref={fileInputRef}
          />
          {isUploading ? (
            <div>
              Upload: {uploadProgress}%.&nbsp;
              <br />
              {uploadProgress === 100 ? 'Saving, please wait....' : null}
            </div>
          ) : null}
          <div className='button-controls'>
            <button
              className='submit-button'
              type='submit'
              onClick={submitVideoHandler}
            >
              Upload Video
            </button>
            {/* <button
              type='button'
              className='cancel-button'
              onClick={cancelUploadHandler}
            >
              Cancel upload
            </button> */}
          </div>
        </VideoSection>
      </VideoContainer>
    </>
  );
};

export default Videos;
