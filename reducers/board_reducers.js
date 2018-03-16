
import types from '../constants/action_types';

const getFullBoardReducer = (prevState, { lists, _id, ...board }) => {
  const listsFormatted = lists.map(({ _id, ...list }) => {
    return { id: _id, ...list };
  });

  return { ...prevState, boardFull: { id: _id, ...board }, lists: listsFormatted };
};

const editBoardReducer = (prevState, board) => {
  return { ...prevState, boardFull: board };
};

const addNewTaskReducer = (prevState, taskInfo) => {
  const lists = prevState.lists.filter(list => list.id !== taskInfo.listId);
  const tasksList = prevState.lists.find(list => list.id === taskInfo.listId);

  tasksList.tasks.push(taskInfo);

  return { ...prevState, lists: [...lists, tasksList] };
};

const boardReducer = (state = {}, action) => {
  switch (action.type) {
  case types.GET_BOARD_INFO:
    return getFullBoardReducer(state, action.boardInfo);
  case types.EDIT_BOARD:
    return editBoardReducer(state, action.board);
  case types.ADD_NEW_TASK:
    return addNewTaskReducer(state, action.taskInfo);
  default:
    return state;
  }
};

export default boardReducer;
