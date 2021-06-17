import { CallType } from "./CallType";
import { requests } from "./request";

const ENDPOINT = `${process.env.REACT_APP_API_BASE}`;
const mockResult = {
  Daily: "Daily horoscope",
  Career: "Career horoscope",
  Love: "Love horoscope",
};
//TODO: Fix these endpoints once they are in backend
export const HoroscopeRepository = {
  responseData: mockResult,
  getUserDailyHoroscope: async (callType = CallType.API) => {
    if (HoroscopeRepository.responseData.Daily && callType === CallType.Cache) {
      return HoroscopeRepository.responseData.Daily;
    }
    const result = await requests.get(`${ENDPOINT}/GeneralHoroscope`);
    HoroscopeRepository.responseData.Daily = result;
    return result;
  },
  getUserCareerHoroscope: async (callType = CallType.API) => {
    if (
      HoroscopeRepository.responseData.Career &&
      callType === CallType.Cache
    ) {
      return HoroscopeRepository.responseData.Career;
    }
    const result = await requests.get(`${ENDPOINT}/CareerHoroscope`);
    HoroscopeRepository.responseData.Career = result;
    return result;
  },
  getUserLoveHoroscope: async (callType = CallType.API) => {
    if (HoroscopeRepository.responseData.Love && callType === CallType.Cache) {
      return HoroscopeRepository.responseData.Love;
    }
    const result = await requests.get(`${ENDPOINT}/LoveHoroscope`);
    HoroscopeRepository.responseData.Love = result;
    return result;
  },
};
