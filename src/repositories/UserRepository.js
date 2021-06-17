import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Users`;

export const UserRepository = {
  responseData: null,
  getUserById: async ({ userId = 1, callType = CallType.API } = {}) => {
    if (UserRepository.responseData && callType === CallType.Cache) {
      return UserRepository.responseData;
    }

    const result = await requests.get(`${ENDPOINT}/${userId}`);
    UserRepository.responseData = result;
    return result;
  },
  updateUserById: async ({ userId = 1, userData } = {}) => {
    const options = {
      body: JSON.stringify(userData),
    };
    return await requests.post(`${ENDPOINT}/${userId}`, options);
  },
};
