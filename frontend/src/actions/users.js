import { createAction } from 'redux-actions';

// Actions
export const userSignedIn = createAction('[User] signedIn');
export const userSignedUp = createAction('[User] signedUp');
export const userSignedOut = createAction('[User] signedOut');
export const userSignedAuth = createAction('[User] signedAuth');

//обыкновенные функции
export const userSigningIn = (data) => (dispatch) => {
    const request = {
        user: data,
    };
    //todo добавить проверку формы data
    if (data.email && data.password) {
        fetch('/api/signin', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(request),
        }).then((res) => {
            return res.json();
        }).then((user) => {
            const storage = data.remember_me ? localStorage : sessionStorage;
            storage.user = JSON.stringify(user);

            //обработчик события
            dispatch(userSignedIn(user));
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningUp = (data) => (dispatch) => {
    const request = {
        user: data,
    };
    //todo добавить проверку формы data
    if (data.email && data.password) {
        fetch('/api/signup', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(request),
        }).then((res) => {
            return res.json();
        }).then((user) => {
            const storage = data.remember_me ? localStorage : sessionStorage;
            storage.user = JSON.stringify(user);

            //обработчик события
            dispatch(userSignedUp(user));
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningOut = (data) => (dispatch) => {
    fetch('/api/signout', {
        method: 'delete',
    }).then((res) => {
        return res.json();
    }).then((user) => {
        delete localStorage.user;
        delete sessionStorage.user;
        dispatch(userSignedOut(user));
    }).catch((err) => console.log('error catch', err));
};

export const userSigningAuth = () => (dispatch) => {
    if (localStorage.user || sessionStorage.user) {
        const user = JSON.parse(localStorage.user || sessionStorage.user);
        user.hasOwnProperty('email') ? dispatch(userSignedAuth(user)) : '';
    }
};