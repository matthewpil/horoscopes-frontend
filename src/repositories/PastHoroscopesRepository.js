import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Horoscopes`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];
//TODO: Fix these endpoints once they are in backend
export const PastHoroscopesRepository = {
  responseData: mockResult,
  getUserPastHoroscopes: async ({
    userId = 1,
    callType = CallType.API,
  } = {}) => {
    if (PastHoroscopesRepository.responseData && callType === CallType.Cache) {
      return PastHoroscopesRepository.responseData;
    }

    const result = requests.get(`${ENDPOINT}/${userId}`);
    PastHoroscopesRepository.responseData = result;
    return result;
  },
};
