import { combineReducers } from 'redux';

import userReducer from './users';
import scoreReducer from './scores';
import categoryReducer from './categories';

export default combineReducers({
    //за управление этим хранилищем отвечает этот редюсер
    user: userReducer,
    score: scoreReducer,
    category: categoryReducer,
});