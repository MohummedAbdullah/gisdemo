// Action types
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';
export const LOGOUT = 'LOGOUT';

// Action creator for setting authentication
export const setAuthentication = (authData) => ({
  type: SET_AUTHENTICATION,
  payload: authData,
});

// Action creator for logging out
export const logout = () => ({
  type: LOGOUT,
});
