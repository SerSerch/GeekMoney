import { handleActions } from 'redux-actions';

import { userSignedIn, /*userSignedOut, userSignedAuth*/ } from 'actions/users';

const initialState = {
    isLogined: false,
};

export default handleActions({
    //наименование Action которое хотим обработать
    [userSignedIn]: (state, action) => {
        //как будет меняться состояние по сигналу
        let res = {};

        if (!action.payload.hasOwnProperty('error')) {
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
//     [userSignedOut]: (state, action) => {
//         /*
//         if (action.payload.hasOwnProperty('error')){
//             return {
//                 ...state,
//                 error: action.payload.error,
//             };
//         } else {
//             return {
//                 isLogined: false,
//                 user: action.payload,
//             };
//         }
// */
//     },
//     [userSignedAuth]: (state, action) => {
//         let res = {};
//         console.log('Auth u', action.payload);
//         if (!action.payload.error) {
//             res = {
//                 isLogined: true,
//                 user: action.payload,
//             };
//         } else {
//             res = {
//                 ...state,
//                 error: action.payload.error,
//             };
//         }
//         return res;
//     },
}, initialState);