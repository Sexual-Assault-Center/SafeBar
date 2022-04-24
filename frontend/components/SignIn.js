/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';

function Signin() {
  const { signInUser } = useAuth();
  return (
    <Button type="button" size="lg" className="copy-btn" onClick={signInUser}>
      Sign In
    </Button>
  );
}

export default Signin;
