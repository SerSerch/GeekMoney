import { handleActions } from 'redux-actions';

import { userSignedIn, userSignedUp, userSignedOut, userSignedAuth } from 'actions/users';

const initialState = {
    isLogined: false,
};

export default handleActions({
    //наименование Action которое хотим обработать
    [userSignedIn]: (state, action) => {
        //как будет меняться состояние по сигналу
        //что будем делать в зависимости то того, что пришло
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('email')) {
            res = {
                isLogined: true,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignedUp]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('errors') && action.payload.hasOwnProperty('email')) {
            res = {
                isLogined: true,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.errors,
            };
        }
        return res;
    },
    [userSignedOut]: (state, action) => {
        let res = {};

        if (!action.payload.hasOwnProperty('error') && action.payload.hasOwnProperty('out')) {
            res = {
                isLogined: false,
                user: action.payload,
            };
        } else {
            res = {
                ...state,
                error: action.payload.error,
            };
        }
        return res;
    },
    [userSignedAuth]: (state, action) => {
        let res = {};
        if (!action.payload.error) {
            res = {
                isLogined: true,
                user: action.payload,
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