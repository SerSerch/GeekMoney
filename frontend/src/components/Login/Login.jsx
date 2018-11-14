import './Login.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

import LockIcon from '@material-ui/icons/LockOutlined';

import { handleInputChange, handleCheckboxChange } from 'containers/handleChange';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        //todo сделать галочку запомнить меня
        this.state = {
            email: '',
            password: '',
            remember_me: true,
        }
    }

    componentDidMount() {
        const { userSigningAuth } = this.props;
        userSigningAuth();
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    onHandleCheckChange = (event) => {
        handleCheckboxChange(event, this);
    };

    onLoginClicked = (event) => {
        const { userSigningIn } = this.props;
        userSigningIn(this.state);
    };

    onLogoutClicked = (event) => {
        const { userSigningOut } = this.props;
        userSigningOut(this.state);
    };

    render()
    {
        const {user} = this.props;
        return (
            <div className="login-window">
                { (user.isLogined) ?
                    <p> Вы уже вошли как {user.user.email}. Ваш номер {user.user.id}
                        <Link to="/score"  className="link"><Button
                            variant="contained"
                            color="primary"
                        >
                            Начать
                        </Button></Link> <Button
                            variant="contained"
                            color="primary"
                            onClick = {this.onLogoutClicked}>
                            Выход
                        </Button></p> :
                    <Paper className="login-window__paper">
                        <FormGroup  className="login-window__form">
                            <Avatar className="login-window__avatar _lock">
                                <LockIcon />
                            </Avatar>
                            <TextField
                                label="Электронная почта"
                                id="signIn-email"
                                name="email"
                                type="email"
                                margin="normal"
                                placeholder="test12@test.ru"
                                required={true}
                                autoFocus={true}
                                onChange={this.onHandleInputChange}
                            />
                            <TextField
                                label="Пароль"
                                id="signIn-password"
                                name="password"
                                type="password"
                                margin="normal"
                                placeholder="111111"
                                required={true}
                                onChange={this.onHandleInputChange}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        onChange={this.onHandleCheckChange}
                                        name="remember_me"
                                        checked={this.state.remember_me}
                                    />
                                }
                                label="Запомнить меня"
                            />
                            <Button
                                className="login-window__button _send"
                                variant="contained"
                                color="primary"
                                onClick = {this.onLoginClicked}>
                                Войти
                            </Button>
                            {(user.error) ?
                                <p className="error-meassage">{user.error}</p> :
                                ''}
                        </FormGroup>
                    </Paper>
                }
            </div>
        );
    }
}

export default Login;