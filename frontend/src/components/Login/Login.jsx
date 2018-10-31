import './Login.scss';

import React, { PureComponent } from 'react';
import {connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {userSigningIn} from 'actions/users';

class Login extends PureComponent {
    
    onLoginClicked = (event) => {
        this.props.userSigningIn({
            email : this.logininput.value,
            password : this.password.value,
        });
        this.logininput.value = '';
        this.password.value = '';
    };
    
    componentDidMount() {
    //     delete localStorage.userid;
    //     const userid = localStorage.getItem("userid");
    //     if (userid != 'undefined' && userid != null) {
    //         console.log(`Userid: ${userid}`)
    //     } else {
    //         const obj = {
    //             "user": {
    //                 "email": "test12@test.ru",
    //                 "password": "111111"
    //             }
    //         };
    //         fetch('/api/signin', {
    //             method: 'post',
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(obj)
    //         })
    //             .then(res => res.json())
    //             .then(res => {
    //                 localStorage.userid = res.id;
    //                 console.log('Signin ' + localStorage.getItem("userid"));
    //             });
    //     }
 }

    render()
        {
        console.log(this.props);
        const {user} = this.props;
        return (
            <div className="loginWindow">
                { (user.isLogined) ?
                    <p> Hello {user.user.email}. Ваш номер {user.user.id}</p> :
                    <form action="#" className="login-form">
                        <TextField
                            id="signIn-email"
                            autoFocus={true}
                            label="E-mail"
                            name={"email"}
                            margin="normal"
                            placeholder="example@example.ex"
                            required={true}
                            type={"email"}
                            inputRef = {(input) => {this.logininput = input}}
                        /> <br/>
                        <TextField
                            required={true}
                            id="signIn-password"
                            label="Password"
                            type="password"
                            margin="normal"
                            inputRef = {(password) => {this.password = password}}
                        /><br/>
                        <Button
                            variant="contained"
                            type="submit"
                            color="primary"
                            onClick = {this.onLoginClicked}>
                            LogIn
                        </Button>
                        {(user.error) ?
                            <p className='error-meassage'>{user.error}</p> :
                            ''}
                    </form>
                }
            </div>
            // <div className="login">Login</div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        userSigningIn: (data) => dispatch(userSigningIn(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;