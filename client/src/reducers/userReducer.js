import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from "../actions/types";

//Pulling the informations from the local storage
//In the user browser and initiating the redux store with it
//We will have to change the method later on for more security
let connected = window.localStorage.getItem("connected");

const initialState = {
    connected: connected === "true" ? true : false,
    errors: {},
    success: null,
};

//In login_success we store the informations for latter extraction
//In login_failure or logout we set everything to null
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            localStorage.setItem("connected", true);
            return {
                ...state,
                errors: {},
                success: action.payload,
                connected: true
            };
        case USER_LOGIN_FAIL:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}