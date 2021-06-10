export default function Register() {
  return (
    <div className="horror_scope_container">
      <h1>Register to Horror Scopes</h1>

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

          <tr>
            <th>
              <label>confirm password</label>
            </th>
            <td>
              <input type="password" placeholder=" confirm password" />
            </td>
          </tr>
        </table>
        <div className="generate_horoscope_button">
          <input type="submit" value="Register" />
        </div>
        <div className="generate_horoscope_button">
          <div className="external-link">Register with external service</div>
          <div className="external-link">I already have an account</div>
        </div>
      </form>
    </div>
  );
}
