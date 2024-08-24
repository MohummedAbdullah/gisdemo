import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store';

const GOOGLE_CLIENT_ID = '1001243476296-q2flh2qngo290ku5tddpo9q3i3ae7k05.apps.googleusercontent.com'; // Replace with your actual Client ID

ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);

