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
  await pajax.post(`${config.envConfig}/boards`, boardInfo);

  store.dispatch({
    type: types.ADD_NEW_BOARD,
    board: boardInfo
  });
};

export default {
  getManagedBoardsData: getManagedBoardsData,
  addNewBoard: addNewBoard
};
