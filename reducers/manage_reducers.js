import types from '../constants/action_types';

const addNewBoardReducer = (prevState, { _id, ...board }) => {
  const boards = [...prevState.boards, { id: _id, ...board }];

  return { ...prevState, boards: boards };
};

const getManagedBoardsReducer = (prevState, boards) => {
  const boardsFormatted = boards.map(({ _id, ...board }) => {
    return { id: _id, ...board };
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
