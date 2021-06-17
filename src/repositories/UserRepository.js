import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}Users`;

export const UserRepository = {
  updateUserById: async ({ userId = 1, userData }) => {
    const options = {
      body: JSON.stringify(userData),
    };
    return await requests.post(`${ENDPOINT}/${userId}`, options);
  },
};
