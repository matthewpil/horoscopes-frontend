import "./details.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import React, { useEffect, useState } from "react";
import { HobbyRepository } from "../../repositories/HobbyRepository";
import { DinosaurRepository } from "../../repositories/DinosaurRepository";
import { ProfessionRepository } from "../../repositories/ProfessionRepository";

const animatedComponents = makeAnimated();

const Details = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState();
  const [selectedDinosaur, setSelectedDinosaur] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [nthChild, setNthChild] = useState(1);

  const [hobbies, setHobbies] = useState([]);
  const [dinosaurs, setDinosaurs] = useState([]);
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    HobbyRepository.getHobbies().then((hobbies) => {
      setHobbies(
        hobbies.map((hobby) => ({ value: hobby.Name, label: hobby.Name }))
      );
    });
  }, []);

  useEffect(() => {
    ProfessionRepository.getProfessions().then((professions) => {
      setProfessions(
        professions.map((profession) => ({
          value: profession.Name,
          label: profession.Name,
        }))
      );
    });
  }, []);

  useEffect(() => {
    DinosaurRepository.getDinosaurs().then((dinosaurs) => {
      setDinosaurs(
        dinosaurs.map((dinosaur) => ({
          value: dinosaur.Name,
          label: dinosaur.Name,
        }))
      );
    });
  }, []);

  const updateUserDetails = () => {
    const updatedUserDetails = {
      selectedHobbies,
      selectedProfession,
      selectedDinosaur,
      dateOfBirth,
      nthChild,
    };
    //TODO: call method on repo to update user
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
                options={dinosaurs}
                onChange={(e) => setSelectedDinosaur(e.value)}
              />
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
                onChange={(e) => {
                  setSelectedHobbies(e.map((hobby) => hobby.value));
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
                options={professions}
                onChange={(e) => setSelectedProfession(e.value)}
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
