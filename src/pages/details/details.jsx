import "./details.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import React, { useEffect, useState } from "react";
import { HobbyRepository } from "../../repositories/HobbyRepository";
import { DinosaurRepository } from "../../repositories/DinosaurRepository";
import { ProfessionRepository } from "../../repositories/ProfessionRepository";
import { UserRepository } from "../../repositories/UserRepository";
import { useHistory } from "react-router-dom";
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
        const responseHobbies = values[0].map((hobby) => ({
          value: hobby.name,
          label: hobby.name,
        }));
        const responseProfessions = values[1].map((profession) => ({
          value: profession.name,
          label: profession.name,
        }));
        const responseDinosaurs = values[2].map((dinosaur) => ({
          value: dinosaur.name,
          label: dinosaur.name,
        }));

        setHobbies(responseHobbies);
        setProfessions(responseProfessions);
        setDinosaurs(responseDinosaurs);

        const currentUser = CurrentUser.get();
        if (!validateUserDetails(currentUser)) {
          return;
        }

        setSelectedProfession(
          responseProfessions.find(
            (profession) => profession.value === currentUser.profession.name
          )
        );
        setSelectedDinosaur(
          responseDinosaurs.find(
            (dinosaur) => dinosaur.value === currentUser.favoriteDinosaur.name
          )
        );

        setSelectedHobbies(
          responseHobbies.filter((hobby) => {
            return currentUser.hobbies.map((h) => h.name).includes(hobby.value);
          })
        );
        setDateOfBirth(
          new Date(currentUser.dateOfBirth).toISOString().substr(0, 10)
        );
        setNthChild(currentUser.nthChild);
      }
    );
  }, []);

  const updateUserDetails = () => {
    const userData = {
      hobbies: selectedHobbies.map((element) => {
        return { name: element?.value };
      }),
      profession: { name: selectedProfession?.value },
      favoriteDinosaur: { name: selectedDinosaur?.value },
      dateOfBirth: new Date(Date.parse(dateOfBirth)),
      nthChild,
    };

    if (validateUserDetails(userData)) {
      UserRepository.updateUserDetails({ ...CurrentUser.get(), ...userData });
      CurrentUser.set({ ...CurrentUser.get(), ...userData });
      history.push("/dashboard");
    } else {
      alert("Invalid data entered");
    }
  };

  return (
    <div className="horror_scope_container">
      <h1>My Details</h1>

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
                setDateOfBirth(e.target.value);
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
              onChange={(e) =>
                setSelectedDinosaur({ value: e.value, label: e.value })
              }
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
                setSelectedHobbies(
                  e.map((hobby) => ({
                    value: hobby.value,
                    label: hobby.label,
                  }))
                );
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
                if (e.target.value >= 1) {
                  setNthChild(e.target.value);
                }
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
              onChange={(e) =>
                setSelectedProfession({ value: e.value, label: e.value })
              }
            />
          </td>
        </tr>
      </table>
      <div className="generate_horoscope_button">
        <button onClick={updateUserDetails}>Continue</button>
      </div>
    </div>
  );
};

export default Details;
