import {combineReducers} from "redux";

import userReducer from "./userLogin";
import adminReducer from "./adminLogin";

const rootReducer = combineReducers({
    userReducer,
    adminReducer
})

export default rootReducer;