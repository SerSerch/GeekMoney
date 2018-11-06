import { combineReducers } from 'redux';

import userReducer from './users';

export default combineReducers({
    //за управление этим хранилищем отвечает этот редюсер
    user: userReducer,
});