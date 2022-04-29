/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Signin({ title }) {
  const { signInUser } = useAuth();
  return (
    <div className="d-grid gap-2 sign-in">
      <h1 className="text-center">{title}</h1>
      <Button type="button" size="lg" className="login-btn" onClick={signInUser}>
        LOGIN WITH GOOGLE
      </Button>
    </div>
  );
}

Signin.propTypes = {
  title: PropTypes.string,
};

Signin.defaultProps = {
  title: '',
};

export default Signin;
