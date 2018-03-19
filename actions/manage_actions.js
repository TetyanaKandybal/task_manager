import pajax from 'pajax';

import store from '../store';
import types from '../constants/action_types';
import config from '../constants/config';

const getManagedBoardsData = async () => {
  const response = await pajax.get(`${config.envConfig}/boards`);

  store.dispatch({
    type: types.GET_MANAGED_BOARDS,
    boards: response
  });
};

const addNewBoard = async (boardInfo) => {
  const response = await pajax.post(`${config.envConfig}/boards`, boardInfo);

  store.dispatch({
    type: types.ADD_NEW_BOARD,
    board: response
  });
};

const deleteBoard = async (id) => {
  await pajax.delete(`${config.envConfig}/boards/${id}`);

  store.dispatch({
    type: types.DELETE_BOARD,
    boardId: id
  });
};

export default {
  getManagedBoardsData: getManagedBoardsData,
  addNewBoard: addNewBoard,
  deleteBoard: deleteBoard
};
