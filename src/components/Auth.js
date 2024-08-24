import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../redux/actions/authActions';

const Auth = () => {
  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    const { credential } = response;

    // Log the credential for debugging purposes
    console.log('Credential:', credential);

    // Store the token in local storage
    localStorage.setItem('authToken', credential);

    // Simulate setting authentication state
    dispatch(setAuthentication({
      isAuthenticated: true,
      user: { name: 'User Name' }, // Replace with actual user data
      token: credential
    }));
  };

  const handleError = (error) => {
    console.error('Login Failed:', error);
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
