import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { HYDRATE } from 'next-redux-wrapper';

import { PostsSagas, PostsReducer } from './post';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    default: {
      const combineReducer = combineReducers({
        posts: PostsReducer,
      });

      return combineReducer(state, action);
    }
  }
};

export function* rootSaga() {
  yield all([...PostsSagas]);
}
