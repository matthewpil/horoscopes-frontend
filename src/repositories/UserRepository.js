import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Users`;
//TODO:Update these once endpoints are in backend
export const UserRepository = {
  responseData: null,
  getUserDetails: async (callType = CallType.API) => {
    if (UserRepository.responseData && callType === CallType.Cache) {
      return UserRepository.responseData;
    }

    const result = await requests.get(`${ENDPOINT}/${1}`);
    UserRepository.responseData = result;
    return result;
  },
  updateUserDetails: async (userData) => {
    const options = {
      body: JSON.stringify(userData),
    };
    return await requests.post(`${ENDPOINT}`, options);
  },
};
