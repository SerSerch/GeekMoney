import './Login.scss';

import React, { PureComponent } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Login extends PureComponent {
    
    onLoginClicked = (event) => {
        this.props.userSigningIn({
            email : this.logininput.value,
            password : this.password.value,
        });
    };

    render()
        {
        const {user} = this.props;
        return (
            <div className="login-window">
                { (user.isLogined) ?
                    <p> Hello {user.user.email}. Ваш номер {user.user.id}</p> :
                    <form action="#" className="login-window__form">
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
                            value="test12@test.ru"
                        /> <br/>
                        <TextField
                            required={true}
                            id="signIn-password"
                            label="Password"
                            type="password"
                            margin="normal"
                            inputRef = {(password) => {this.password = password}}
                            value="111111"
                        /><br/>
                        <Button
                            variant="contained"
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
        );
    }
}

export default Login;