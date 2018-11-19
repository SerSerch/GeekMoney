import { createAction } from 'redux-actions';

// Actions
export const userSignedIn = createAction('[User] signedIn');
export const userSignedUp = createAction('[User] signedUp');
export const userSignedOut = createAction('[User] signedOut');
export const userSignedAuth = createAction('[User] signedAuth');

//обыкновенные функции
export const userSigningIn = (obj) => (dispatch) => {
    const {data, history} = obj;
    const {email, password, remember_me} = data;
    const request = {
        user: {email, password, remember_me},
    };

    //todo добавить проверку формы data
    if (data.email && data.password) {
        fetch('/api/v1/signin', {
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
            history.push('/score');
            history.replace('/score');
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningUp = (obj) => (dispatch) => {
    const {data, history} = obj;
    const {email, password, remember_me} = data;
    const request = {
        user: {email, password, remember_me},
    };
    //todo добавить проверку формы data
    if (data.email && data.password) {
        fetch('/api/v1/signup', {
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
            history.push('/score');
            history.replace('/score');
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningOut = (data) => (dispatch) => {
    fetch('/api/v1/signout', {
        method: 'delete',
    }).then((res) => {
        return res.json();
    }).then((user) => {
        delete localStorage.user;
        delete sessionStorage.user;
        dispatch(userSignedOut(user));
    }).catch((err) => console.log('error catch', err));
};

export const userSigningAuth = (obj) => (dispatch) => {
    const {user, history} = obj;
    if (!user.isLogined && (localStorage.user || sessionStorage.user)) {
        const userStorage = JSON.parse(localStorage.user || sessionStorage.user);
        if (userStorage.hasOwnProperty('email')) {
            dispatch(userSignedAuth(userStorage));
            history.push('/score');
            history.replace('/score');
        };
    }
};