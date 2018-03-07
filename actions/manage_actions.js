import pajax from 'pajax';

import store from '../store';
import types from '../constants/action_types';

const envConfig = 'http://localhost:3000';

const getManagedBoardsData = async () => {
  const response = await pajax.get(`${envConfig}/boards`);

  store.dispatch({
    type: types.GET_MANAGED_BOARDS,
    boards: response
  });
};

export default {
  getManagedBoardsData: getManagedBoardsData
};
