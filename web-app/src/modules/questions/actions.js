import * as types from "./constants";

export const getQuestions = () => ({
  type: types.GET_QUESTIONS_START,
  payload: undefined,
});

export const getQuestionsSuccess = (data) => ({
  type: types.GET_QUESTIONS_FULFILLED,
  payload: data,
});

export const getQuestionsFailed = () => ({
  type: types.GET_QUESTIONS_REJECTED,
  payload: undefined,
});

export const setAnswer = (data) => ({
  type: types.SET_ANSWER_ACTION,
  payload: data,
});

export const setCurrentIndex = (data) => ({
  type: types.SET_CURRENT_INDEX_ACTION,
  payload: data,
});

export const resetQuestions = () => ({
  type: types.RESET_QUESTIONS_ACTION,
  payload: undefined,
});