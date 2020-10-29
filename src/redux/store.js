import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

import reduxThunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebase from "../services/firebase";


// const middlewares = [thunk];
// export const store = createStore(
//   rootReducer,
//   {},
//   compose(applyMiddleware(...middlewares))
// );

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(
  createStore
);
export const store = createStoreWithFirebase(
  rootReducer,
  {},
  applyMiddleware(reduxThunk)
);