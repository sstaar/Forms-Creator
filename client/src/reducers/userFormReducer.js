import { USER_GET_FORM_SUCCESS } from "../actions/types";

const initialState = {
    submissions: [],
    structure: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_GET_FORM_SUCCESS:
            return {
                ...state,
                loading: false,
                submissions: action.payload.subs,
                structure: action.payload.structure,
            }
        default:
            return state;
    }
}