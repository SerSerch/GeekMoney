import { createAction } from 'redux-actions';

// Actions
export const testSignedIn = createAction('[Test] signedIn');

//обыкновенные функции
export const testSigningIn = (data) => (dispatch) => {
    const request = {
        user: data,
    };
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