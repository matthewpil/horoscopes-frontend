/* eslint-disable no-lone-blocks */
import { useEffect } from "react";
import { useState } from "react";
import StarRating from "../../components/starRatings/starRatings";
import { HoroscopeRepository } from "../../repositories/HoroscopeRepository";
import { StarRatingsRepository } from "../../repositories/StarRatingsRepository";

import "./dashboard.css";
const MONTH_AS_TEXT = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getTodaysDate() {
  let todayDate = new Date();
  return (
    todayDate.getDate() +
    " " +
    MONTH_AS_TEXT[todayDate.getMonth() + 1] +
    " " +
    todayDate.getFullYear()
  );
}
export default function Dashboard() {
  const [selectedTabKey, setSelectedTabKey] = useState("Daily");
  const [dailyHoroscope, setDailyHoroscope] = useState("Querying the stars...");
  const [careerHoroscope, setCareerHoroscope] = useState(
    "Querying the stars..."
  );
  const [loveHoroscope, setLoveHoroscope] = useState("Querying the stars...");
  const [starRatings, setStarRatings] = useState();

  const [HOROSCOPE_TYPE_TABS, setHoroscopeTabs] = useState({
    Daily: { isClicked: true, text: dailyHoroscope },
    Career: { isClicked: false, text: careerHoroscope },
    Love: { isClicked: false, text: loveHoroscope },
  });

  useEffect(() => {
    HoroscopeRepository.getUserDailyHoroscope().then((response) => {
      setDailyHoroscope(response);
    });
    HoroscopeRepository.getUserCareerHoroscope().then((response) => {
      setCareerHoroscope(response);
    });
    HoroscopeRepository.getUserLoveHoroscope().then((response) => {
      setLoveHoroscope(response);
    });

    StarRatingsRepository.getUserDailyStarRatings().then((response) => {
      setStarRatings(response);
    });
  }, []);

  const setSelectedTab = (tab_name) => {
    let newTabs = { ...HOROSCOPE_TYPE_TABS };
    Object.keys(newTabs).forEach((key) => {
      newTabs[key].isClicked = false;
    });

    newTabs[tab_name].isClicked = true;
    setSelectedTabKey(tab_name);
    setHoroscopeTabs(newTabs);
  };

  return (
    <div className="horror_scope_container">
      <div className="dashboard_container">
        <div className="dashboard_container_header">
          <span className="welcome_message">Your Dashboard</span>
        </div>

        <div className="dashboard_container_display_horoscope">
          <div className="dashboard_container_display_horoscope_header">
            <span className="todays_date">{getTodaysDate()}</span>

            <button className="view_all_button">View All Horoscopes</button>
          </div>
          <p id="horoscope_content">
            {HOROSCOPE_TYPE_TABS[selectedTabKey].text}
          </p>
        </div>
        <div className="dashboard_container_display_tabs">
          {Object.keys(HOROSCOPE_TYPE_TABS).map((element) => {
            return (
              <div
                className={`dashboard_container_display_tab ${
                  HOROSCOPE_TYPE_TABS[element].isClicked ? "is-clicked" : ""
                }`}
                onClick={() => setSelectedTab(element)}
              >
                {element}
              </div>
            );
          })}
        </div>

        <section className="dashboard_container_star_ratings">
          <StarRating starRatings={starRatings} />
        </section>
      </div>
    </div>
  );
}
