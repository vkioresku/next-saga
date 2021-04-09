import { actionTypes } from './types';

export const failure = (error) => {
  return {
    type: actionTypes.FAILURE,
    error,
  };
};

export const loadData = () => {
  return { type: actionTypes.LOAD_DATA };
};

export const loadDataSuccess = (data) => {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data,
  };
};
