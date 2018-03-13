import pajax from 'pajax';

import store from '../store';

import types from '../constants/action_types';
import config from '../constants/config';

const addNewTask = async (taskInfo) => {
  await pajax.post(`${config.envConfig}/tasks/`, taskInfo);

  store.dispatch({
    type: types.ADD_NEW_TASK,
    boardInfo: taskInfo
  });
};

export default {
  addNewTask: addNewTask
};
