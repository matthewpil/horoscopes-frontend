import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function Logout({ className }) {
  const history = useHistory();

  const logout = () => {
    sessionStorage.setItem("loggedIn", false);
    history.push("/");
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLogoutSuccess={logout}
      render={(renderProps) => (
        <button
          className={className}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          Logout
        </button>
      )}
    ></GoogleLogout>
  );
}
