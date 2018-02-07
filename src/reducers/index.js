import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxFormReducer } from 'redux-form';
import testUser from './testUserReducer';

import user from './userReducer';

export default combineReducers({
  currentUser: user,
  routing: routerReducer,
  testUser: testUser,
  form: reduxFormReducer
})
