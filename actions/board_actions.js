import pajax from 'pajax';

import store from '../store';

import types from '../constants/action_types';
import config from '../constants/config';

const getBoardInfo = async (boardId) => {
  const response = await pajax.get(`${config.serverConfig}/boards/${boardId}`);

  store.dispatch({
    type: types.GET_BOARD_INFO,
    boardInfo: response
  });
};

const editBoard = async (board) => {
  await pajax.put(`${config.serverConfig}/boards/${board.id}`, board);

  store.dispatch({
    type: types.EDIT_BOARD,
    board: board
  });
};

const addNewList = async ({ boardId, ...listInfo }) => {
  const response = await pajax.post(`${config.serverConfig}/boards/${boardId}/lists/`, listInfo);

  store.dispatch({
    type: types.ADD_NEW_LIST,
    listInfo: response
  });
};

const addNewTask = async ({ boardId, listId, ...taskInfo }) => {
  await pajax.post(`${config.serverConfig}/boards/${boardId}/lists/${listId}/tasks`, taskInfo);

  store.dispatch({
    type: types.ADD_NEW_TASK,
    taskInfo: { listId, ...taskInfo }
  });
};

export default {
  getBoardInfo: getBoardInfo,
  editBoard: editBoard,
  addNewList: addNewList,
  addNewTask: addNewTask
};
