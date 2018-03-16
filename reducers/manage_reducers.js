import types from '../constants/action_types';

const addNewBoardReducer = (prevState, board) => {
  const boards = [...prevState.boards, board];

  return { ...prevState, boards: boards };
};

const getManagedBoardsReducer = (prevState, boards) => {
  const boardsFormatted = boards.map(({ _id, ...board }) => {
    board.id = _id;
    return board;
  });

  return { ...prevState, boards: boardsFormatted };
};

const manageReducer = (state = {}, action) => {
  switch (action.type) {
  case types.GET_MANAGED_BOARDS:
    return getManagedBoardsReducer(state, action.boards);
  case types.ADD_NEW_BOARD:
    return addNewBoardReducer(state, action.board);
  default:
    return state;
  }
};

export default manageReducer;
