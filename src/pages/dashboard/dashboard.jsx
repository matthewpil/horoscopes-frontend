/* eslint-disable no-lone-blocks */
import { useState } from "react";
import StarRating from "../../components/starRatings/starRatings";
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
  const [HOROSCOPE_TYPE_TABS, setHoroscopeTabs] = useState({
    Daily: { isClicked: true },
    Career: { isClicked: false },
    Love: { isClicked: false },
  });

  const setSelectedTab = (tab_name) => {
    let newTabs = { ...HOROSCOPE_TYPE_TABS };
    Object.keys(newTabs).forEach((key) => {
      newTabs[key].isClicked = false;
    });

    newTabs[tab_name].isClicked = true;
    setHoroscopeTabs(newTabs);
  };

  const starRatings = {
    Love: 2,
    Success: 3,
    'INVEST IN AMC': 5,
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
            <span className="view_all_button">
              <button>View All Horoscopes</button>
            </span>
          </div>
          <p id="horoscope_content">View your daily horoscope here</p>
        </div>
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

        <section className="dashboard_container_star_ratings">
          <StarRating starRatings={starRatings} />
        </section>
      </div>
    </div>
  );
}
