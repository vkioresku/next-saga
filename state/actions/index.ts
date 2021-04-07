export const actionTypes = {
  HYDRATE: 'HYDRATE',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  FAILURE: 'FAILURE',
};

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
