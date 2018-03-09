import types from '../constants/action_types';

const getFullBoardReducer = (prevState, board) => {
  return { ...prevState, boardFull: board };
};

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_BOARD_INFO:
      return getFullBoardReducer(state, action.boardInfo);
    default:
      return state;
  }
};

export default boardReducer;
