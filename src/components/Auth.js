import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../redux/actions/authActions';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    // Assuming successful login returns a token
    console.log(response);  // For debug, log the response
    dispatch(setAuthentication(true));
    // Here, you would also save the token to secure storage
  };

  const handleError = () => {
    alert('Login Failed. Please try again.');
  };

  return (
    <div>
      <h2>Login with Google</h2>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};

export default Auth;


