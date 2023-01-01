import { userActions } from "./user-slice";
import { uiActions } from "../ui-slice/ui-slice";
import * as userAPI from '../../utilities/users-api'
import { getUser } from "../../utilities/users-service";

export const signUpUser = (userData) => {
  return async (dispatch) => {
    const signUp = async () => {
      const token = await userAPI.signUp(userData)
      localStorage.setItem("token", token);
      return getUser()
    };

    try {
        const user = await signUp()
        dispatch(userActions.signUp(user))
    } catch (err) {
        throw new Error('Sign up failed.')
    }
  };
};

export const logInUser = (userData) => {
    return async (dispatch) => {
        const logIn = async () => {
            const token = await userAPI.login(userData)
            localStorage.setItem("token", token);
            return getUser()
        }
        try {
            dispatch(uiActions.toggleNotification({
                status: 'pending',
                message: 'Authenticating, please wait...'
            }))
            const user = await logIn()
            dispatch(userActions.logIn(user))
            dispatch(uiActions.toggleNotification({
                status: 'success',
                message: 'Logged in was successful!'
            }))
        } catch(err) {
            dispatch(uiActions.toggleNotification({
                status: 'error',
                message: 'Login failed. Try again.'
            }))
            throw new Error('Login in failed.')
        }
    }
}