import { combineReducers } from 'redux';

import userReducer from './users';
import scoreReducer from './scores';

export default combineReducers({
    //за управление этим хранилищем отвечает этот редюсер
    user: userReducer,
    score: scoreReducer,
});