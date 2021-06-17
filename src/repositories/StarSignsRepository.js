import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}StarSigns`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const StarSignsRepository = {
  responseData: mockResult,
  getStarSigns: async (callType = CallType.API) => {
    if (StarSignsRepository.responseData && callType === CallType.Cache) {
      return StarSignsRepository.responseData;
    }

    const result = await requests.get(ENDPOINT);
    StarSignsRepository.responseData = result;
    return result;
  },
};
