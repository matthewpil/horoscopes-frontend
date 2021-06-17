import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}StarRatings`;
const mockResult = {
  "Result 1": 1,
  "Result 2": 3,
  "Result 3": 5,
  "Result 4": 2,
};

export const StarRatingsRepository = {
  responseData: mockResult,

  getUserDailyStarRatings: async (callType = CallType.API) => {
    if (StarRatingsRepository.responseData && callType === CallType.Cache) {
      return StarRatingsRepository.responseData;
    }

    const result = await requests.get(`${ENDPOINT}`);
    StarRatingsRepository.responseData = result;
    return result;
  },
};
