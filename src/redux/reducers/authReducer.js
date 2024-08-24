import { SET_AUTHENTICATION } from '../actions/authActions';

// Initial state for authentication
const initialState = {
  isAuthenticated: false,  // User is not authenticated by default
};

// Reducer to handle authentication state
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};

export default authReducer;
