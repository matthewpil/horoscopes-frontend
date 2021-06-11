import "./home.css";
export default function Home() {
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
        <button>Login</button>
      </div>
      <div className="footer">Total Legit Horoscopes</div>
    </div>
  );
}
