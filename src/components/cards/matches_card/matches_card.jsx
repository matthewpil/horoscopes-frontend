import Card from "../base_card/card";
import "./matches_card.css";

export default function MatchesCard(props) {
  return (
    <Card width={30} height={15}>
      <header className="matches-header">Today's Matches</header>
    </Card>
  );
}
