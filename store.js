import { createStore } from 'redux';

import reducers from './reducers/manage_reducers';

const store = createStore(reducers);
export default store;
