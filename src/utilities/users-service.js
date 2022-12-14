import * as usersAPI from "./users-api";

// Service modules export business/app logic
// Such as managing tokens, etc.
// Service modules often depend upon API modules
// for making AJAX requests to the server
export const signUp = async (userData) => {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  // TODO: return user from token
  return getUser();
};

export const logOut = () => {
  localStorage.removeItem("token");
};

export const login = async (userData) => {
  const token = await usersAPI.login(userData);
  localStorage.setItem("token", token);
  return getUser();
};

export const getToken = () => {
  // getItem returns null if key does not exist
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  // A JWT exp prop is expressed in seconds NOT ms
  if (payload.exp * 1000 < Date.now()) {
    // Token has expired
    localStorage.removeItem("token");
    return null;
  }
  return token;
};

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export const checkToken = () => {
  // We cant forget how to use .then with promises
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
};
