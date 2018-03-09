import pajax from 'pajax';

import store from '../store';

import types from '../constants/action_types';
import config from '../constants/config';

const getBoardInfo = async (boardId) => {
  const response = await pajax.get(`${config.envConfig}/boards/${boardId}`);

  store.dispatch({
    type: types.GET_BOARD_INFO,
    boardInfo: response
  });
};

export default {
  getBoardInfo: getBoardInfo
};
