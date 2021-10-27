import {combineReducers} from "redux";
import streamsReducers from "./reducer";
const rootReducer = combineReducers({
    data: streamsReducers
});
export default rootReducer;