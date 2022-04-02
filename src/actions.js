export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_CURRETNT_PAGE = 'SAVE_PAGE';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const UPDATE_USER_PASS = 'UPDATE_USER_PASS';

export const logIn = data => ({ type: LOG_IN, payload: data });
export const logOut = () => ({ type: LOG_OUT });

export const saveCurrentPage = data => ({
  type: SAVE_CURRETNT_PAGE,
  payload: data
})

export const saveUserData = data => ({
  type: SAVE_USER_DATA,
  payload: data,
})

export const updateUserPass = data => ({
  type: UPDATE_USER_PASS,
  payload: data
})
