const uploadVideo = ({ parsedData, file }) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();
    Object.keys(parsedData.fields).forEach((data) => {
      formData.append(data, parsedData.fields[data]);
    });
    formData.append("file", file);
    xhr.open("POST", parsedData.url);
    xhr.responseType = "json";
    xhr.onerror = (error) => {
      reject(error);
    };
    xhr.onload = () => {
      if (xhr.status > 200 && xhr.status < 300) {
        resolve({ ...xhr.response, url: xhr.getResponseHeader("Location") });
      } else {
        reject({
          status: xhr.status,
          message: xhr.statusText,
        });
      }
    };
    xhr.upload.onprogress = function (event) {
      console.log(
        `${Math.floor((event.loaded * 100) / event.total)}% completed`,
      );
    };
    xhr.send(formData);
  });
};

export default uploadVideo;
