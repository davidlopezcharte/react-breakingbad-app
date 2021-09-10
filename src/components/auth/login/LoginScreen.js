import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { login } from '../../../actions/auth';
import { AuthContext } from '../../../auth/AuthContext';
import { useForm } from '../../../hooks/useForm';
import { useUiError } from '../../../hooks/useUiError';
import {
  firebase,
  googleAuthProvider,
} from '../../../firebase/firebase-config';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const { isLoading, startLoading, finishLoading } = useUiError();

  const [formValue, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValue;

  const handleLogin = (e) => {
    e.preventDefault();

    startLoading();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        // finishLoading();
      })
      .catch(({ message }) => {
        Swal.fire({
          title: 'Error!',
          text: message,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
        finishLoading();
      });
  };

  const handleGoogleLogin = () => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };

  return (
    <>
      <div className="">
        <div className="auth__box-container">
          <h3 className="auth__title">Login</h3>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="auth__input"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="auth__input"
              value={password}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={isLoading.loading}
            >
              Login
            </button>

            <div className="auth__social-networks">
              <p className="">Login with social networks</p>
              <button
                type="button"
                className="google-btn"
                onClick={handleGoogleLogin}
              >
                <div className="google-icon-wrapper">
                  <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="google button"
                  />
                </div>
                <p className="btn-text">
                  <b>Sign in with google</b>
                </p>
              </button>
            </div>

            <Link to="/auth/register" className="link">
              Create new account
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
