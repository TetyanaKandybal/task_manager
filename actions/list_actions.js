import pajax from 'pajax';

import store from '../store';

import types from '../constants/action_types';
import config from '../constants/config';

const addNewList = async ({ boardId, ...listInfo }) => {
  const response = await pajax.post(`${config.envConfig}/boards/${boardId}/lists/`, listInfo);

  store.dispatch({
    type: types.ADD_NEW_LIST,
    listInfo: response
  });
};

export default {
  addNewList: addNewList
};
