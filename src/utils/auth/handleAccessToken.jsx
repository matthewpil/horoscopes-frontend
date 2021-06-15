export const saveAccessToken = (access_token) => {
  sessionStorage.setItem("access_token", access_token);
};

export const retrieveAccessToken = () => {
  sessionStorage.getItem("access_token");
};
