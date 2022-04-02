import { LOG_IN, LOG_OUT, SAVE_CURRETNT_PAGE, SAVE_USER_DATA, UPDATE_USER_PASS } from '../actions';

export function auth(state = {auth: false, email: '', password: ''}, action) {
  switch (action.type) {
    case LOG_IN:
      return {auth: true, ...action.payload};
    case LOG_OUT:
      return {auth: false};
    default:
      return state;
  }
}

export function currentPage(state = 'Login', action) {
  switch (action.type) {
    case SAVE_CURRETNT_PAGE:
      return action.payload;
    default:
      return state;
  }
}

export function userData(state = [{email: 'admin@mail.com', password: 'Admin123'}], action) {
  switch (action.type) {
    case SAVE_USER_DATA:
      return [...state, action.payload];
    case UPDATE_USER_PASS:
      state.find(user => user.password === action.payload.oldPassword).password = action.payload.password
      return state
    default:
      return state;
  }
}
