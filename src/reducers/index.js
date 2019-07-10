import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  users: usersReducer,
});

export default rootReducer;
