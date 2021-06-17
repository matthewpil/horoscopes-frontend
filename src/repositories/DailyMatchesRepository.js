import { zodiacSigns } from "../constants/zodiac_signs";
import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}DailyMatches`;

const mockResult = {
  love: zodiacSigns.capricornus,
  friendship: zodiacSigns.libra,
  career: zodiacSigns.virgo,
};

export const DailyMatchesRepository = {
  responseData: mockResult,

  getUserDailyMatches: async ({ userId = 1, callType = CallType.API }) => {
    if (DailyMatchesRepository.responseData && callType === CallType.Cache) {
      return DailyMatchesRepository.responseData;
    }

    return await requests.get(`${ENDPOINT}/${userId}`);
  },
};