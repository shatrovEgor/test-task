import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as reduxFormReducer } from 'redux-form';
import {auth, currentPage, userData} from './reducers/auth';

const reducers = combineReducers({
  auth,
  currentPage,
  userData,
  form: reduxFormReducer, // mounted under "form"
});

const store = createStore(reducers, composeWithDevTools());

export default store;
