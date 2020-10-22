import { all } from 'redux-saga/effects';
import sagas from './reducer/saga';

export default function* rootSaga(getState) {
  yield all([
    sagas()
  ]);
}