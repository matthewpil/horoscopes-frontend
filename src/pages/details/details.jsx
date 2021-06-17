import "./details.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import React, { useEffect, useState } from "react";
import { HobbyRepository } from "../../repositories/HobbyRepository";
import { DinosaurRepository } from "../../repositories/DinosaurRepository";
import { ProfessionRepository } from "../../repositories/ProfessionRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { Redirect, useHistory } from "react-router-dom";
import CurrentUser from "../../singletons/CurrentUser";
import validateUserDetails from "../../utils/validation/validateUserDetails";

const animatedComponents = makeAnimated();

const Details = () => {
  const history = useHistory();
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState({});
  const [selectedDinosaur, setSelectedDinosaur] = useState({});
  const [dateOfBirth, setDateOfBirth] = useState();
  const [nthChild, setNthChild] = useState(1);

  const [hobbies, setHobbies] = useState([]);
  const [dinosaurs, setDinosaurs] = useState([]);
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    const hobbiesPromise = HobbyRepository.getHobbies();
    const professionsPromise = ProfessionRepository.getProfessions();
    const dinosaursPromise = DinosaurRepository.getDinosaurs();
    Promise.all([hobbiesPromise, professionsPromise, dinosaursPromise]).then(
      (values) => {
        setHobbies(
          values[0].map((hobby) => ({ value: hobby.name, label: hobby.name }))
        );
        setProfessions(
          values[1].map((profession) => ({
            value: profession.name,
            label: profession.name,
          }))
        );
        setDinosaurs(
          values[2].map((dinosaur) => ({
            value: dinosaur.name,
            label: dinosaur.name,
          }))
        );

        const currentUser = CurrentUser.get();
        if (!validateUserDetails(currentUser)) {
          return <Redirect to={"/"} />;
        }

        setSelectedProfession(
          professions.find(
            (profession) => profession.value === currentUser.profession.name
          )
        );
        setSelectedDinosaur(
          dinosaurs.find(
            (dinosaur) => dinosaur.value === currentUser.favoriteDinosaur.name
          )
        );
        setSelectedHobbies(
          hobbies.filter((hobby) =>
            values[0].map((h) => h.name).includes(hobby.value)
          )
        );
        setDateOfBirth(
          new Date(currentUser.dateOfBirth).toISOString().substr(0, 10)
        );
        setNthChild(currentUser.nthChild);
      }
    );
  });

  const updateUserDetails = () => {
    const userData = {
      selectedHobbies,
      selectedProfession,
      selectedDinosaur,
      dateOfBirth,
      nthChild,
    };
    UserRepository.updateUserDetails({ userData });
    history.push("/dashboard");
  };

  return (
    <div className="horror_scope_container">
      <h1>My Details</h1>

      <form>
        <table>
          <tr>
            <th>
              <label>1. My date of birth?</label>
            </th>
            <td>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                  const dob = new Date(Date.parse(e.target.value));
                  setDateOfBirth(dob);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>
              {" "}
              <label>2. What is my favourite Dinosaur?</label>{" "}
            </th>
            <td>
              <Select
                value={selectedDinosaur}
                options={dinosaurs}
                onChange={(e) => setSelectedDinosaur({ name: e.value })}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>3. What are my hobbies?</label>{" "}
            </th>
            <td>
              <Select
                value={selectedHobbies}
                components={animatedComponents}
                closeMenuOnSelect={false}
                options={hobbies}
                isMulti
                onChange={(e) => {
                  setSelectedHobbies(e.map((hobby) => ({ name: hobby })));
                }}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>4. I am the nth child of my family?</label>
            </th>
            <td>
              <input
                value={nthChild}
                type="number"
                placeholder="child number"
                onChange={(e) => {
                  setNthChild(e.target.value);
                }}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>5. My Profession</label>
            </th>
            <td>
              <Select
                value={selectedProfession}
                options={professions}
                onChange={(e) => setSelectedProfession({ name: e.value })}
              />
            </td>
          </tr>
        </table>
        <div className="generate_horoscope_button">
          <button type="submit" onClick={updateUserDetails}>
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default Details;
