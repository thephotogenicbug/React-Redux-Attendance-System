import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  attendaceCreateReducer,
  attendaceListReducer,
  attendaceUpdateReducer,
} from "./reducers/attendancesReducer";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  attendaceCreate: attendaceCreateReducer,
  attendaceList: attendaceListReducer,
  attendaceUpdate: attendaceUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initalState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
