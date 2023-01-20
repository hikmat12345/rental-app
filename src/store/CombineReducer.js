import { combineReducers } from "redux";
import BookingStore from "./BookingStore";

const appReducer = combineReducers({
  booking: BookingStore,
});

export default (state, action) => appReducer(state, action);
