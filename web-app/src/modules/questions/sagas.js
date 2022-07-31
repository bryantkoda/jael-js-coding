import { call, put, takeLatest } from 'redux-saga/effects'

import * as types from "./constants";
import * as actions from "./actions";
import { api } from '../../helpers/api';

function* getQuestionsSaga(action) {
  try {
    const { data } = yield call(api, {
      url: `/questions`,
      method: 'get',
    })

    console.log(data);

    yield put(actions.getQuestionsSuccess(data));
  } catch (e) {
    yield put(actions.getQuestionsFailed());
  }
} 

export function* questionsWatchersSaga() {
  yield takeLatest(types.GET_QUESTIONS_START, getQuestionsSaga);
}

export default questionsWatchersSaga;
