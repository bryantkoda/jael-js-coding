import * as types from "./constants";

const initialState = {
  questionList: [],
  currentIndex: 0,
  answers: [],
  isLoading: false,
};

const reducer = (state = initialState, action = {}) => {
  console.log(action.type);
  switch(action.type) {
    case types.GET_QUESTIONS_START: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case types.GET_QUESTIONS_FULFILLED: {
      console.log(action.payload);
      return {
        ...state,
        questionList: action.payload,
        isLoading: false,
      }
    }
    case types.GET_QUESTIONS_REJECTED: {
      return {
        ...state,
        isLoading: false,
      }
    }
    case types.SET_CURRENT_INDEX_ACTION: {
      return {
        ...state,
        currentIndex: action.payload,
      }
    }
    case types.SET_ANSWER_ACTION: {
      return {
        ...state,
        answers: [...state.answers, action.payload],
      }
    }
    case types.RESET_QUESTIONS_ACTION: {
      return {
        ...state,
        questionList: [],
        currentIndex: 0,
        answers: [],
      }
    }
    default: {
      return state;
    }
  }
}

export default reducer;