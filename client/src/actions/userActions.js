import { USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL } from './types';
import Axios from 'axios';

//In case of login success we send a token and the username
//To the userReducer to store the token
//In case of failure we send the errors to the userReducer 
//To affect them in the form
export const login = async (loginInfo) => {

    const mapResponse = (response) => {
        let errors = {};
        if (response.errors && response.errors.details) {
            response.errors.details.forEach(error => {
                errors[error.context.key] = error.message;
            });
            return errors;
        }
        return response.errors;
    }

    try {
        let response = await Axios.post(`/api/user/login`, loginInfo);
        response = response.data;
        if (response.success)
            return {
                type: USER_LOGIN_SUCCESS,
                payload: response.success
            }
        return {
            type: USER_LOGIN_FAIL,
            payload: mapResponse(response)
        }

    } catch (error) {
        return {
            type: USER_LOGIN_FAIL,
            payload: { errors: { general: "SERVER ERROR." } }
        };
    }
};

export const logout = async () => {

    try {
        await Axios.delete(`/api/user/logout`);
        console.log('asasas')

        return {
            type: USER_LOGOUT_SUCCESS
        }
    } catch (error) {
        return {
            type: USER_LOGOUT_FAIL
        }
    }
};