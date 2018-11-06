import './Login.scss';

import React, { PureComponent } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import handleChange from 'containers/handleChange';

class Login extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    componentDidMount() {
        const { userSigningAuth } = this.props;
        userSigningAuth();
    }

    onHandleChange = (event) => {
        handleChange(event, this);
    };

    onLoginClicked = (event) => {
        const { userSigningIn } = this.props;
        userSigningIn(this.state);
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
                            name="email"
                            margin="normal"
                            placeholder="test12@test.ru"
                            required={true}
                            type="email"
                            onChange={this.onHandleChange}
                        /> <br/>
                        <TextField
                            required={true}
                            id="signIn-password"
                            name="password"
                            label="Password"
                            type="password"
                            margin="normal"
                            placeholder="111111"
                            onChange={this.onHandleChange}
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