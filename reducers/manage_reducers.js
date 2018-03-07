import types from '../constants/action_types';

const addNewBoardReducer = (prevState, board) => {
  const boards = [...prevState.boards, board];

  return { ...prevState, boards: boards };
};

const manageReducer = (state = {}, action) => {
  switch (action.type) {
  case types.GET_MANAGED_BOARDS:
    return { ...state, boards: action.boards };
  case types.ADD_NEW_BOARD:
    return addNewBoardReducer(state, action.board);
  default:
    return state;
  }
};

export default manageReducer;
