import sendRequest from "./send-request";

const BASE_URL = "/api/users";

export const signUp = async (userData) => {
  return sendRequest(BASE_URL, 'POST', userData)
};

export const login = async (userData) => {
  return sendRequest(`${BASE_URL}/login`, 'POST', userData)
}


export const checkToken = async () => {
  return sendRequest(`${BASE_URL}/check-token`)
}