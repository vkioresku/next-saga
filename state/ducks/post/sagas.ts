import { all, put, takeLatest, fork } from 'redux-saga/effects';
import { failure, loadDataSuccess } from './actions';
import { actionTypes } from './types';

function* loadData() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* watchLoadData() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadData)]);
}

const postsSagas = [fork(watchLoadData)];

export default postsSagas;
