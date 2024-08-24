import { SET_AUTHENTICATION, LOGOUT } from '../actions/authActions';

// Initial state for authentication
const initialState = {
  isAuthenticated: false,
  user: null,  // Additional property to store user information
  token: null, // Additional property to store the authentication token
};

// Reducer to handle authentication state
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user, // Set user information
        token: action.payload.token, // Set the token
      };
    case LOGOUT:
      return initialState; // Reset to initial state on logout
    default:
      return state;
  }
};

export default authReducer;
