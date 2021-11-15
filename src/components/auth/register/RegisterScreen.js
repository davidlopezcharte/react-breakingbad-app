import React, { useContext } from 'react';
import validator from 'validator';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { firebase } from '../../../libs/firebase/firebase-config';
import { useForm } from '../../../hooks/useForm';
import { useUiError } from '../../../hooks/useUiError';
import { AuthContext } from '../../../context/auth/AuthContext';
import { login } from '../../../context/actions/auth';

export const RegisterScreen = () => {
  const [formValue, handleInputChange] = useForm({
    name: 'Angelica',
    email: 'angelica@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const { name, email, password, password2 } = formValue;

  const { dispatch } = useContext(AuthContext);

  const { msgError, setError, removeError } = useUiError();

  const isFormValid = () => {
    if (name.trim().length === 0) {
      setError('Name is required');
      return false;
    }
    if (!validator.isEmail(email)) {
      setError('Email is not valid');
      return false;
    }
    if (password.length < 5 || password !== password2) {
      setError('Password should be at least 6 character and match.');
      return false;
    }

    removeError();

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async ({ user }) => {
          await user.updateProfile({ displayName: name });
          dispatch(login(user.uid, user.displayName));
        })
        .catch(({ message }) => {
          Swal.fire({
            title: 'Error!',
            text: message,
            icon: 'error',
            confirmButtonText: 'Ok',
          });
        });
    }
  };

  return (
    <>
      <div className="auth__box-container">
        <h3 className="auth__title">Register</h3>

        {msgError.messageError && (
          <div className="alert alert-danger" role="alert">
            {msgError.messageError}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="auth__input"
            autoComplete="off"
            onChange={handleInputChange}
            value={name}
          />

          <input
            type="text"
            placeholder="Email"
            name="email"
            className="auth__input"
            autoComplete="off"
            onChange={handleInputChange}
            value={email}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="auth__input"
            onChange={handleInputChange}
            value={password}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            className="auth__input"
            onChange={handleInputChange}
            value={password2}
          />

          <button type="submit" className="btn btn-primary btn-block">
            Register
          </button>

          <Link to="auth/login" className="link">
            Already registered?
          </Link>
        </form>
      </div>
    </>
  );
};
