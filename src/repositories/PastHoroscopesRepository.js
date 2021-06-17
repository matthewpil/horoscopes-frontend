import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Horoscopes/past`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const PastHoroscopesRepository = {
  responseData: mockResult,
  getUserPastHoroscopes: async ({ userId = 1, callType = CallType.API }) => {
    if (PastHoroscopesRepository.responseData && callType === CallType.Cache) {
      return PastHoroscopesRepository.responseData;
    }
    return await requests.get(`${ENDPOINT}/${userId}`);
  },
};
