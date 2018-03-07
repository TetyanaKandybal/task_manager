import types from '../constants/action_types';

const manageReducer = (state = {}, action) => {
  switch (action.type) {
  case types.GET_MANAGED_BOARDS:
    return { ...state, boards: action.boards };
  default:
    return state;
  }
};

export default manageReducer;
