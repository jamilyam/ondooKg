import {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  EMAIL_NOT_VERIFIED,
  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,
  RESET_SUCCESS,
  RESET_ERROR,
} from "./actionTypes";
import { beginApiCall, apiCallError } from "./apiStatus";
import firebase from "../../../services/firebase";

// Signing up with Firebase
export const signup = (email, password) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((dataBeforeEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          user.sendEmailVerification();
        });
      })
      .then((dataAfterEmail) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            // Sign up successful
            dispatch({
              type: SIGNUP_SUCCESS,
              payload:
                "Ваш аккаунт был успешно создан! Теперь Вам необходимо подтвердить Вашу e-mail адрес, пожалуйста проверьте входящие письма.",
            });
          } else {
            // Signup failed
            dispatch({
              type: SIGNUP_ERROR,
              payload: "Что то пошло не так, пожалуйста попробуйте еще раз.",
            });
          }
        });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNUP_ERROR,
          payload: "Что то пошло не так, пожалуйста попробуйте еще раз.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNUP_ERROR,
      payload: "Что то пошло не так, пожалуйста попробуйте еще раз.",
    });
  }
};

// Signing in with Firebase
export const signin = (email, password, callback) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        if (data.user.emailVerified) {
          dispatch({ type: SIGNIN_SUCCESS });
          callback();
        } else {
          dispatch({
            type: EMAIL_NOT_VERIFIED,
            payload: "Вам необходимо подтвердить ваш e-mail адрес.",
          });
        }
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNIN_ERROR,
          payload: "Неверный логин или пароль.",
        });
      });
  } catch (err) {
    console.log("error: ", err);
    dispatch(apiCallError());
    dispatch({ type: SIGNIN_ERROR, payload: "Неверный логин или пароль." });
  }
};

// Signing out with Firebase
export const signout = () => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: SIGNOUT_SUCCESS });
      })
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: SIGNOUT_ERROR,
          payload: "Error, we were not able to log you out. Please try again.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({
      type: SIGNOUT_ERROR,
      payload: "Error, we were not able to log you out. Please try again.",
    });
  }
};

// Reset password with Firebase
export const resetPassword = (email) => async (dispatch) => {
  try {
    dispatch(beginApiCall());
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() =>
        dispatch({
          type: RESET_SUCCESS,
          payload:
            "Check your inbox. We've sent you a secured reset link by e-mail.",
        })
      )
      .catch(() => {
        dispatch(apiCallError());
        dispatch({
          type: RESET_ERROR,
          payload:
            "Oops, something went wrong we couldn't send you the e-mail. Try again and if the error persists, contact admin.",
        });
      });
  } catch (err) {
    dispatch(apiCallError());
    dispatch({ type: RESET_ERROR, payload: err });
  }
};
