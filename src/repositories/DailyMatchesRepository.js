import { zodiacSigns } from "../constants/zodiac_signs";
import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}StarSigns`;

const mockResult = {
  love: zodiacSigns.capricornus,
  friendship: zodiacSigns.libra,
  career: zodiacSigns.virgo,
};

export const DailyMatchesRepository = {
  responseData: mockResult,

  getUserDailyMatches: async ({
    starSignId = "Aries",
    callType = CallType.API,
  } = {}) => {
    if (DailyMatchesRepository.responseData && callType === CallType.Cache) {
      return DailyMatchesRepository.responseData;
    }

    const result = await requests.get(
      `${ENDPOINT}/${starSignId}/MatchesForToday`
    );
    DailyMatchesRepository.responseData = result;
    return result;
  },
};
