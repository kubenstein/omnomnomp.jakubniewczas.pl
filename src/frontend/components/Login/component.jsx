import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';

import Topbar from 'components/Topbar';

import './styles.scss';

const Login = ({ onLogin }) => {
  const formRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const { email } = serialize(formRef.current, { hash: true });
    return email && onLogin(email);
  };

  return (
    <div className="login-wrapper">
      <Topbar />
      <div className="login-box">
        <form
          className="form"
          ref={formRef}
          onSubmit={submit}
        >
          <span className="welcomeText">
            <span>Omnomnomp </span>
            Browse, Like, Want, Eat!
          </span>
          <h1 className="title">Login / SignUp:</h1>
          <input className="input" name="email" type="email" placeholder="Email..." />
          <input className="btn btn-success" type="submit" value="log in" />
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
