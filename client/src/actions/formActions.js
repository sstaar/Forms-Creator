import Axios from 'axios';
import {
    USER_GET_FORMS_FAIL,
    USER_GET_FORMS_SUCCESS,
    USER_GET_FORM_SUCCESS,
    USER_GET_FORM_FAIL
} from './types';

export const getUserForms = async () => {
    try {
        let response = await Axios.get(`/api/user/forms`);

        return {
            type: USER_GET_FORMS_SUCCESS,
            payload: response.data
        }
    } catch (error) {
        return { type: USER_GET_FORMS_FAIL }
    }
};

export const getUserForm = async (name) => {
    try {
        let response = await Axios.get(`/api/user/forms/${name}`);
        console.log(response.data);
        return {
            type: USER_GET_FORM_SUCCESS,
            payload: response.data
        }
    } catch (error) {
        return { type: USER_GET_FORM_FAIL }
    }
};

export const deleteUserForm = async (name) => {
    try {
        let response = await Axios.delete(`/api/user/forms/${name}`);
        console.log(response.data);
        return {
            type: USER_GET_FORM_SUCCESS,
            payload: response.data
        }
    } catch (error) {
        return { type: USER_GET_FORM_FAIL }
    }
};