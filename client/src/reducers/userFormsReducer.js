import { USER_GET_FORMS_SUCCESS } from "../actions/types";

const initialState = {
    forms: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_GET_FORMS_SUCCESS:
            return {
                ...state,
                loading: false,
                forms: action.payload
            }
        default:
            return state;
    }
}