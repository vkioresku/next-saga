import { all, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, loadDataSuccess } from '../actions';

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.LOAD_DATA, loadDataSaga)]);
}

export default rootSaga;
