import Card from "../base_card/card";
import Icon from "../../icon/icon";
import "./matches_card.css";
import { zodiacSigns } from "../../../constants/zodiac_signs";

export default function MatchesCard(props) {
  const signs = props.signs ?? {
    love: zodiacSigns.aquarius,
    friendship: zodiacSigns.aries,
    career: zodiacSigns.cancer
  };
  return (
    <Card width={30} height={15}>
      <header className="matches-header">Today's Matches</header>
      <main>
        <section>
          <h3>LOVE</h3>
          <article className="icon">
            <Icon type={signs.love}/>
          </article>
          <h4>{signs.love.description}</h4>
        </section>
        <section>
          <h3>FRIENDSHIP</h3>
          <article className="icon">
            <Icon type={signs.friendship}/>
          </article>
          <h4>{signs.friendship.description}</h4>
        </section>
        <section>
          <h3>CAREER</h3>
          <article className="icon">
            <Icon type={signs.career}/>
          </article>
          <h4>{signs.career.description}</h4>
        </section>
      </main>
    </Card>
  );
}
