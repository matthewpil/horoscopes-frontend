import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Horoscopes`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];
export const PastHoroscopesRepository = {
  responseData: mockResult,
  getUserPastHoroscopes: async (callType = CallType.API) => {
    if (PastHoroscopesRepository.responseData && callType === CallType.Cache) {
      return PastHoroscopesRepository.responseData;
    }

    const result = requests.get(`${ENDPOINT}`);
    PastHoroscopesRepository.responseData = result;
    return result;
  },
};
