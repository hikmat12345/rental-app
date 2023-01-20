import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bookingReducer from "./bookingReducer";
import errorReducer from "./errorReducer";
import phoneEmailVerifyReducer from "./phoneEmailVerify";
import personalInfoReducer from "./personalInfo";
import waterActivityReducer from "./waterActivityReducer";
const reducer = combineReducers({
  authReducer,
  errorReducer,
  phoneEmailVerifyReducer,
  personalInfoReducer,
  bookingReducer,
  waterActivityReducer,
});

export default reducer;
