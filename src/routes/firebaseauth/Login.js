import React, { useState } from "react";
import { connect } from "react-redux";
import {
  signup,
  signin,
  resetPassword,
} from "../../redux/firebaseAuth/actions/auth";
import useForm from "./utils/useForm";
import validate from "./utils/validateLoginForm";
import Spinner from "./Spinner";
import "./Login.css";

const Login = ({
  signup,
  signin,
  resetPassword,
  authMsg,
  history,
  loading,
}) => {
  const [newUser, setNewUser] = useState(false);
  const [reset, SetReset] = useState(false);

  const [credentials, handleChange, handleSubmit, errors] = useForm(
    login,
    validate,
    reset,
    newUser
  );

  function login() {
    if (newUser) {
      // signup
      signup(credentials.email, credentials.password);
    } else {
      if (reset) {
        // reset password
        resetPassword(credentials.email);
      } else {
        // signin
        signin(
          credentials.email,
          credentials.password,
          () =>
            // history.push("/")
            (window.location = "/")
        );
      }
    }
  }

  return (
    <div className="login">
      <h1>Приветствуем!</h1>
      <h2>
        {reset ? "Сбросить пароль" : newUser ? "Зарегистрироваться" : "Войти"}
      </h2>
      {authMsg && <p className="auth-message"> {authMsg}</p>}
      <form onSubmit={handleSubmit} noValidate>
        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            placeholder="Введите Ваш e-mail"
            onChange={handleChange}
            className={
              (errors.emailIsEmpty || errors.emailFormatInvalid) &&
              "input-error"
            }
          />
          {errors.emailIsEmpty && <small> {errors.emailIsEmpty}</small>}
          {errors.emailFormatInvalid && (
            <small> {errors.emailFormatInvalid}</small>
          )}
        </div>
        {/* PASSWORD */}
        {!reset && (
          <div className="input-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              placeholder="Введите Ваш пароль"
              onChange={handleChange}
              className={
                (errors.passIsStrong || errors.passIsEmpty) && "input-error"
              }
            />
            {errors.passIsStrong && <small> {errors.passIsStrong}</small>}
            {errors.passIsEmpty && <small> {errors.passIsEmpty}</small>}
          </div>
        )}
        {/* BUTTONS */}
        <div>
          <button type="submit" className="btn-login">
            {loading ? (
              <Spinner />
            ) : reset ? (
              "Сбросить пароль"
            ) : newUser ? (
              "Зарегистрироваться"
            ) : (
              "Войти"
            )}
          </button>
          {!newUser && !reset && (
            <button onClick={() => SetReset(true)} className="btn-login">
              Забыли пароль?
            </button>
          )}
          {reset && (
            <button onClick={() => SetReset(false)} className="btn-login">
              Снова войти
            </button>
          )}
        </div>
      </form>
      <footer className="login-footer">
        <p>{newUser ? "Уже есть аккаунт?" : "Пока нет аккаунта?"}</p>
        <button
          onClick={() => {
            setNewUser(!newUser);
            if (reset) SetReset(false);
          }}
          className="btn-login"
        >
          {newUser ? "Войти" : "Зарегистрироваться"}
        </button>
      </footer>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    authMsg: state.authReducer.authMsg,
    loading: state.apiStatusReducer.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, password) => dispatch(signup(email, password)),
    signin: (email, password, callback) =>
      dispatch(signin(email, password, callback)),
    resetPassword: (email) => dispatch(resetPassword(email)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
