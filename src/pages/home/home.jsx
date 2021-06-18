import "./home.css";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import { login } from "../../utils/auth/login";
import { requests } from "../../repositories/request"

const AUTH_ENDPOINT = `${process.env.REACT_APP_API_BASE}api/Auth/Google`;

export default function Home() {
  const history = useHistory();
  const onLoginSuccess = (res) => {

    requests.post(AUTH_ENDPOINT, {body: JSON.stringify({
      tokenId: res.tokenId
    }) }).then(authResponse => {
      
      if (!(authResponse.token === "")) {
        login(res);
        if (authResponse.registeredUser) {
          history.push("/dashboard");
        } else {
          history.push("/details");
        }
      }
    });

  };

  const onLoginFail = (res) => {
    console.log("Login failed: ", res);
  };

  return (
    <div className="header">
      <h1>Welcome to Totally Legit Horoscopes.</h1>{" "}
      <h1>
        We are able to generate your horoscope using basic information provided
        by you. If you want your horoscope generated, register your details now
        to get started
      </h1>
      <div className="button-group">
        {" "}
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign in with Google"
          onSuccess={onLoginSuccess}
          onFailure={onLoginFail}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          uxMode={"popup"}
        />
      </div>
      <div className="footer">Totally Legit Horoscopes</div>
    </div>
  );
}
