import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Horoscopes/daily`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const DailyHoroscopeRepository = {
  responseData: mockResult,
  getUserDailyHoroscope: async ({ userId = 1, callType = CallType.API }) => {
    if (DailyHoroscopeRepository.responseData && callType === CallType.Cache) {
      return DailyHoroscopeRepository.responseData;
    }
    return await requests.get(`${ENDPOINT}/${userId}`);
  },
};
