import { handleActions } from 'redux-actions';

import { userSignedIn } from 'actions/scores';

const initialState = {
    score: {},
};

export default handleActions({
    //наименование Action которое хотим обработать
    [userSignedIn]: (state, action) => {
        //как будет меняться состояние по сигналу
        //что будем делать в зависимости то того, что пришло
        let res = {};

        if (!action.payload.hasOwnProperty('error')) {
            res = {
                score: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
}, initialState);