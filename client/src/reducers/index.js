import { combineReducers } from "redux";
import user from './userReducer';

//this only comine all the reducers because
//we will be having many reducers in the future
export default combineReducers({
    user
});