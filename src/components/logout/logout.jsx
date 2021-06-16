import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { logout } from "../../utils/auth/logout";

export default function Logout({ className }) {
  const history = useHistory();

  const onLogoutSuccess = () => {
    logout();
    history.push("/");
  };
  return (
    <GoogleLogout
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      onLogoutSuccess={onLogoutSuccess}
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
