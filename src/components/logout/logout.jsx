import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function Logout() {
  const history = useHistory();

  const logout = () => {
    sessionStorage.setItem("loggedIn", false);
    history.push("/login");
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={logout}
    ></GoogleLogout>
  );
}
