import "./details.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default function Details() {
  const hobbies = [
    { value: "Fishing", label: "Fishing" },
    { value: "Hunting", label: "Hunting" },
  ];

  const dinosaurs = [
    { value: "Triceratops", label: "Triceratops" },
    { value: "Tyrannosaurus", label: "Tyrannosaurus" },
    { value: "Stegosaurus", label: "Stegosaurus" },
    { value: "Brachiosaurus", label: "Brachiosaurus" },
    { value: "Baryonyx", label: "Baryonyx" },
    { value: "Ankylosaurus", label: "Ankylosaurus" },
    { value: "Oviraptor", label: "Oviraptor" },
  ];

  const professions = [{ value: "Docter", label: "Doctor" }];

  return (
    <div className="horror_scope_container">
      <h1>My Details</h1>

      <form action="/dashboard">
        <table>
          <tr>
            <th>
              <label>1. My date of birth?</label>
            </th>
            <td>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <th>
              {" "}
              <label>2. What is my favourite Dinosaur?</label>{" "}
            </th>
            <td>
              <Select options={dinosaurs} />
            </td>
          </tr>

          <tr>
            <th>
              <label>3. What are my hobbies?</label>{" "}
            </th>
            <td>
              <Select
                components={animatedComponents}
                closeMenuOnSelect={false}
                options={hobbies}
                isMulti
                className="select-input"
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>4. I am the nth child of my family?</label>
            </th>
            <td>
              <input type="number" placeholder="child number" />
            </td>
          </tr>

          <tr>
            <th>
              <label>5. My Profession</label>
            </th>
            <td>
              <Select options={professions} />
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
