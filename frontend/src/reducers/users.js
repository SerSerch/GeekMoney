import { handleActions } from 'redux-actions';

import {userSignedIn, } from 'actions/users';

const initialState = {
    isLogined: false,
};

export default handleActions({
    [userSignedIn]: (state, action) => {
        if (action.payload.hasOwnProperty('error')){
            return {
                ...state,
                error: action.payload.error,
            };
        }else{
            return {
                isLogined: true,
                user: action.payload,
            };
        }
        
    },
}, initialState);