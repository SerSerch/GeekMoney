import './Login.scss';

import React, { PureComponent } from 'react';
import { Link, withRouter } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import LockIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { handleInputChange, handleCheckboxChange } from 'containers/handleChange';

class Login extends PureComponent {
    constructor(props) {
        super(props);
        //todo сделать галочку запомнить меня
        this.state = {
            email: '',
            password: '',
            remember_me: true,
            showPassword: false,
            history: this.props.history
        }
    }

    componentDidMount() {
        const { userSigningAuth, user, history } = this.props;
        userSigningAuth({user, history});
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    onHandleCheckChange = (event) => {
        handleCheckboxChange(event, this);
    };

    onLoginClicked = (event) => {
        const { userSigningIn, history } = this.props;
        userSigningIn({data: this.state, history});
    };

    onLogoutClicked = (event) => {
        const { userSigningOut } = this.props;
        userSigningOut(this.state);
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
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
                                error={user.error ? true : false}
                            />
                            <FormControl
                                error={user.error ? true : false}
                                required={true}
                            >
                                <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
                                <Input
                                    id="signIn-password"
                                    name="password"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    placeholder="111111"
                                    onChange={this.onHandleInputChange}
                                    inputProps={{
                                        maxLength: "16",
                                    }}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                            >
                                                {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
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
                                <div className="login-window__error">{user.error}</div> :
                                ''}
                        </FormGroup>
                    </Paper>
                }
            </div>
        );
    }
}

export default Login;