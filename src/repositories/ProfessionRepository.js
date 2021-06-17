import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Professions`;
const mockResult = ["Result 1", "Result 2", "Result 3", "Result 4"];

export const ProfessionRepository = {
  responseData: mockResult,
  getProfessions: async (callType = CallType.API) => {
    if (ProfessionRepository.responseData && callType === CallType.Cache) {
      return ProfessionRepository.responseData;
    }

    return await requests.get(ENDPOINT);
  },
};
