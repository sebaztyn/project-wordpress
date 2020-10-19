const LocalStorageService = (() => {
  // let _service: any;
  // const _getService = () => {
  //   if (!_service) {
  //     _service = this;
  //     return _service;
  //   }
  //   return _service;
  // };
  const _setToken = (tokenObj) => {
    localStorage.setItem("ishcToken", tokenObj.ishcToken);
    localStorage.setItem("refreshToken", tokenObj.refreshToken);
  };
  const _getAccessToken = () => {
    return localStorage.getItem("ishcToken");
  };
  const _getRefreshToken = () => {
    return localStorage.getItem("refreshToken");
  };
  const _clearToken = () => {
    return localStorage.clear();
  };
  return {
    // getService: _getService,
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
  };
})();

export default LocalStorageService;
