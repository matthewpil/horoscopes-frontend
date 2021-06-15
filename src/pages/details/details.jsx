import "./details.css";

export default function Details() {
  return (
    <div className="horror_scope_container">
      <h1>Your Details</h1>

      <form action="/dashboard">
        <table>
          <tr>
            <th>
              <label>1. Enter your date of birth?</label>
            </th>
            <td>
              <input type="date" />
            </td>
          </tr>

          <tr>
            <th>
              {" "}
              <label>2. What is your favourite Dinosaur?</label>{" "}
            </th>
            <td>
              {" "}
              <select>
                <option>Triceratops</option>
                <option>Tyrannosaurus</option>
                <option>Stegosaurus</option>
                <option>Brachiosaurus</option>
                <option>Baryonyx</option>
                <option>Ankylosaurus</option>
                <option>Oviraptor</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>
              <label>3. What is your star sign?</label>
            </th>
            <td>
              <select>
                <option></option>
                <option>Metal tracking</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>
              <label>4. What is your hobby?</label>{" "}
            </th>
            <td>
              <select>
                <option>Fishing</option>
                <option>Metal tracking</option>
              </select>
            </td>
          </tr>

          <tr>
            <th>
              <label>5. I am the nth child of my family?</label>
            </th>
            <td>
              <input type="number" placeholder="child number" />
            </td>
          </tr>

          <tr>
            <th>
              <label>6. My Profession</label>
            </th>
            <td>
              <select>
                <option>Doctor</option>
                <option>Game Design</option>
              </select>
            </td>
          </tr>
        </table>
        <div className="generate_horoscope_button">
          <input type="submit" value="Continue" />
        </div>
      </form>
    </div>
  );
}
