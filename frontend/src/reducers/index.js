import { combineReducers } from 'redux';
import { authReducers } from './auth'; 

const reducers = combineReducers({
  authReducers,
});

export { reducers };
