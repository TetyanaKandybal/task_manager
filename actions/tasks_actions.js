import pajax from 'pajax';

import store from '../store';

import types from '../constants/action_types';
import config from '../constants/config';

const addNewTask = async ({ boardId, listId, ...taskInfo }) => {
  await pajax.post(`${config.envConfig}/boards/${boardId}/lists/${listId}/tasks`, taskInfo);

  store.dispatch({
    type: types.ADD_NEW_TASK,
    taskInfo: { listId, ...taskInfo }
  });
};

export default {
  addNewTask: addNewTask
};
