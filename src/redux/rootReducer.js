import { combineReducers } from "redux";
import cryptoReducer from "./crypto/cryptoReducer";

const rootReducers = combineReducers({
    cryptoState: cryptoReducer
})

export default rootReducers;