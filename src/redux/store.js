import { createStore, combineReducers } from 'redux';
import mapReducer from './reducers/mapReducer';
import authReducer from './reducers/authReducer'; 

const rootReducer = combineReducers({
  map: mapReducer,
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
