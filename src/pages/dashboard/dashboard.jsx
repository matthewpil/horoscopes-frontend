import MatchesCard from "../../components/cards/matches_card/matches_card";
import DailyMatches from "../../repositories/dailyMatchesRepo";
import "./dashboard.css";

export default function Dashboard() {
  const matches = DailyMatches.getMatches();

  return (
    <div className="horror_scope_container">
      <MatchesCard signs={matches} />
    </div>
  );
}
