// Action types
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

// Action creator for setting authentication
export const setAuthentication = (isAuthenticated) => ({
  type: SET_AUTHENTICATION,
  payload: isAuthenticated,
});
