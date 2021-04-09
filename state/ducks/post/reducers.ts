import { actionTypes } from './types';
import { HYDRATE } from 'next-redux-wrapper';

const INITIAL_STATE = {
  postsResponse: null,
  error: '',
};

const posts = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ postsResponse: action.data },
      };

    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error },
      };

    default:
      return state;
  }
};

export default posts;
