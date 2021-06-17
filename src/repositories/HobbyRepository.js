import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Hobbies`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const HobbyRepository = {
  responseData: mockResult,
  getHobbies: async (callType = CallType.API) => {
    if (HobbyRepository.responseData && callType === CallType.Cache) {
      return HobbyRepository.responseData;
    }

    const result = await requests.get(ENDPOINT);
    HobbyRepository.responseData = result;
    return result;
  },
};
