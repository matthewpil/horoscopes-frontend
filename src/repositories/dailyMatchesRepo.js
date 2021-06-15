import { zodiacSigns } from "../constants/zodiac_signs";

const mockResult = {
  love: zodiacSigns.capricornus,
  friendship: zodiacSigns.libra,
  career: zodiacSigns.virgo,
};

class DailyMatchesRepo {
  constructor() {
    this._matches = {};
  }

  getMatches() {
    if (Object.keys(this._matches).length === 0) {
      const matches = mockResult;
      this._matches = matches;
      return matches;
    }
    return this.matches;
  }
}

const DailyMatches = new DailyMatchesRepo();

export default DailyMatches;
