import { saveAccessToken } from "./handleAccessToken";
let timeout;
export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  saveAccessToken(res.tokenObj.access_token);
  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    saveAccessToken(newAuthRes.tokenObj.access_token);
    refreshTiming = (newAuthRes.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    timeout = setTimeout(refreshToken, refreshTiming);
  };

  timeout = setTimeout(refreshToken, refreshTiming);
};

export const refreshTokenStop = () => {
  clearTimeout(timeout);
};
