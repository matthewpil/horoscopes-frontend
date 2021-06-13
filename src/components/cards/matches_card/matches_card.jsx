import Card from "../base_card/card";
import Icon from "../../icon/icon";
import "./matches_card.css";
import { iconData } from "../../../resources/star_sign_icons";

export default function MatchesCard(props) {
  const zodiacSigns = props.signs ?? {
    love: iconData.aquarius,
    friendship: iconData.aries,
    career: iconData.cancer
  };
  return (
    <Card width={30} height={15}>
      <header className="matches-header">Today's Matches</header>
      <main>
        <section>
          <h3>LOVE</h3>
          <article className="icon">
            <Icon type={zodiacSigns.love}/>
          </article>
          <h4>{zodiacSigns.love.description}</h4>
        </section>
        <section>
          <h3>FRIENDSHIP</h3>
          <article className="icon">
            <Icon type={zodiacSigns.friendship}/>
          </article>
          <h4>{zodiacSigns.friendship.description}</h4>
        </section>
        <section>
          <h3>CAREER</h3>
          <article className="icon">
            <Icon type={zodiacSigns.career}/>
          </article>
          <h4>{zodiacSigns.career.description}</h4>
        </section>
      </main>
    </Card>
  );
}
