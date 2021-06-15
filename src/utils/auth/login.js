import { refreshTokenSetup } from "./refreshTokenSetup";

export const login = (res) => {
  sessionStorage.setItem("loggedIn", true);
  refreshTokenSetup(res);
};
