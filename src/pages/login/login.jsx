import "./login.css";
export default function Login() {
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
          <div className="external-link">Login with external service</div>
          <div className="external-link">Do not yet have an account</div>
        </div>
      </form>
    </div>
  );
}
