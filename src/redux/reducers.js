// import { combineReducers } from "redux";
// import ProductsReducer from "./products/reducer";
// import AuthReducer from "./auth/reducer";

// export const rootReducer = combineReducers({
//   products: ProductsReducer,
//   auth: AuthReducer,
// });


import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./firebaseAuth/reducers/auth";
import apiStatusReducer from "./firebaseAuth/reducers/apiStatus";

import ProductsReducer from "./products/reducer";

export const rootReducer = combineReducers({
  products: ProductsReducer,
  firebaseReducer: firebaseReducer,
  authReducer: authReducer,
  apiStatusReducer: apiStatusReducer,
});