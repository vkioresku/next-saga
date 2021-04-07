import { actionTypes } from '../actions';
import { HYDRATE } from 'next-redux-wrapper';

const reducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload };
    }

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data },
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

export default reducer;
