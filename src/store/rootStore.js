import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { CombineReducer } from "./index";

const RootStore = createStore(CombineReducer, {}, applyMiddleware(ReduxThunk));
export default RootStore;
