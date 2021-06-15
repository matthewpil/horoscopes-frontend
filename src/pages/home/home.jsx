import "./home.css";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  const onLoginSuccess = (res) => {

    if (!res.tokenId) {
      console.error("Unable to get tokenId from Google.", res)
      return;
    }

    const tokenBlob = new Blob([JSON.stringify({ tokenId: res.tokenId }, null, 2)], {type: 'application/json'});
    const options = {
      // headers: new Headers({'Access-Control-Allow-Origin': 'https://localhost:44370', 'Access-Control-Allow-Credentials': 'true'}),
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    console.log("newcode3");
    fetch("http://localhost:44370/api/Auth/google", options)
      .then(r => {
        r.json().then(user => {
          const token = user.token;

          console.log("we got the token: user.token: ", user.token);

          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("token", user.token);
          history.push("/details");

          console.log(token);
          this.props.login(token);
        });
      })

  };

  const onLoginFail = (res) => {
    console.log("Login failed: ", res);
  };

  function runthis() {
    console.log("htis si lkajsdfaskdf");
    var a = 3 + 4;
  }

  return (
    <div className="header">
      <button onClick={runthis}>presstsdfsdfhis</button>
      <h1>Welcome to Totally Legit Horoscopes.</h1>{" "}
      <h1>
        We are able to generate your horoscope using basic information provided
        by you. If you want your horoscope generated, register your details now
        to get started
      </h1>
      <div className="button-group">
        {" "}
        <GoogleLogin
          // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          clientId={"964763576438-u7opofticd7m6dkpodp1vcfj66747fa6.apps.googleusercontent.com"}
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
