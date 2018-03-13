
import types from '../constants/action_types';

const getFullBoardReducer = (prevState, { tasksLists, tasks, ...board }) => {
  const lists = tasksLists.map((list) => {
    list.tasks = tasks.filter(task => list.id !== task.tasksListId);
    return list;
  });
  return { ...prevState, boardFull: board, lists: lists };
};

const editBoardReducer = (prevState, board) => {
  return { ...prevState, boardFull: board };
};

const boardReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_BOARD_INFO:
      return getFullBoardReducer(state, action.boardInfo);
    case types.EDIT_BOARD:
      return editBoardReducer(state, action.board);
    default:
      return state;
  }
};

export default boardReducer;
