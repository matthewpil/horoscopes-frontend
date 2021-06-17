import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Dinosaurs`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const DinosaurRepository = {
  responseData: mockResult,
  getDinosaurs: async (callType = CallType.API) => {
    if (DinosaurRepository.responseData && callType === CallType.Cache) {
      return DinosaurRepository.responseData;
    }

    const result = await requests.get(ENDPOINT);
    DinosaurRepository.responseData = result;
    return result;
  },
};
