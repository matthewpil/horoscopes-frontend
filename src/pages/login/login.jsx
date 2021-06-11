import "./login.css";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const onLoginSuccess = (res) => {
    sessionStorage.setItem("loggedIn", true);
    history.push("/generate");
  };

  const onLoginFail = (res) => {
    console.log("Login failed: ", res);
  };

  return (
    <div className="horror_scope_container">
      <h1>Login to Horror Scopes</h1>

      <form action="" method="POST">
        <table>
          <tr>
            <th>
              <label>username</label>
            </th>
            <td>
              <input type="text" placeholder="username" />
            </td>
          </tr>

          <tr>
            <th>
              <label>password</label>
            </th>
            <td>
              <input type="password" placeholder="password" />
            </td>
          </tr>
        </table>
        <div className="generate_horoscope_button">
          <input type="submit" value="Login" />
        </div>
        <div className="generate_horoscope_button">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={onLoginSuccess}
            onFailure={onLoginFail}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            uxMode={"popup"}
          />
          <div className="external-link">Do not yet have an account</div>
        </div>
      </form>
    </div>
  );
}
