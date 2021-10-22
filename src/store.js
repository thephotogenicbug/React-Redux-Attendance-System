import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  admissionCreateReducer,
  admissionListReducer,
} from "./reducers/admissionReducer";
import {
  attendaceCreateReducer,
  attendaceListReducer,
  attendaceUpdateReducer,
} from "./reducers/attendancesReducer";
import { leaveCreateReducer } from "./reducers/leaveReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import { walkinCreateReducer, walkinListReducer } from "./reducers/walkinReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  attendaceCreate: attendaceCreateReducer,
  attendaceList: attendaceListReducer,
  attendaceUpdate: attendaceUpdateReducer,
  leaveCreate: leaveCreateReducer,
  userUpdate: userUpdateReducer,
  admissionCreate: admissionCreateReducer,
  admissionList: admissionListReducer,
  walkinCreate: walkinCreateReducer,
  walkinList: walkinListReducer,
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
