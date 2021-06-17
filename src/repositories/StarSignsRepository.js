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

    return await requests.get(ENDPOINT);
  },
  getStarSignById: async (id) => {
    return await requests.get(`${ENDPOINT}/${id}`);
  },
};
