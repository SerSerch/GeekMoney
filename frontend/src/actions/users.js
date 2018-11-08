import { createAction } from 'redux-actions';

// Actions
export const userSignedIn = createAction('[User] signedIn');
//export const userSignedOut = createAction('[User] signedOut');
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
            /*
            for (let key of res.headers.keys()){
                console.log (key, ':',res.headers.get(key) );
            }
            */
            //console.log(document.cookie);
            return res.json();
        }).then((user) => {
            localStorage.user = JSON.stringify(user);
            //обработчик события
            dispatch(userSignedIn(user));
        }).catch((err) => console.log('error catch', err));
    }
};

export const userSigningOut = (data) => (dispatch) => {
    console.log("out")
    fetch('/api/signout', {
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(request),
    }).then((res) => {
        return res.json();
    }).then((user) =>{
        console.log('input ',user);
        dispatch(userSignedOut(user));
    }).catch((err) => console.log('error catch', err));
};

export const userSigningAuth = () => (dispatch) => {
    if (localStorage.user) {
        const user = JSON.parse(localStorage.user);
        dispatch(userSignedAuth(user));
    }
};