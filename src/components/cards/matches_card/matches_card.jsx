import Card from "../base_card/card";
import Icon from "../../icon/icon";
import "./matches_card.css";
import { zodiacSigns } from "../../../constants/zodiac_signs";

export default function MatchesCard(props) {
  const signs = props.signs ?? {
    love: zodiacSigns.aquarius,
    friendship: zodiacSigns.aries,
    career: zodiacSigns.cancer,
  };
  return (
    <Card width={30} height={15}>
      <header className="matches-header">Today's Matches</header>
      <main>
        {Object.keys(signs).map((key) => {
          return (
            <section>
              <h3>{key.toUpperCase()}</h3>
              <article className="icon">
                <Icon type={signs[key]} />
              </article>
              <h4>{signs[key].description}</h4>
            </section>
          );
        })}
      </main>
    </Card>
  );
}
