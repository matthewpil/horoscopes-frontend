import { saveAccessToken } from "./handleAccessToken";
import { refreshTokenStop } from "./refreshTokenSetup";

export const logout = () => {
  sessionStorage.setItem("loggedIn", false);
  refreshTokenStop();
  saveAccessToken("");
};
