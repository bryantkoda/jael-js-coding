import { all, fork } from 'redux-saga/effects';

import { questionsWatchersSaga } from './questions';

export function* rootSaga() {
  yield all([fork(questionsWatchersSaga)]);
}