import './Logup.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { handleInputChange } from 'containers/handleChange';
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

import LockIcon from '@material-ui/icons/LockOutlined';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class Logup extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember_me: false,
            showPassword: false,
        }
    }

    componentDidMount() {
        const { userSigningAuth } = this.props;
        userSigningAuth();
    }

    onHandleInputChange = (event) => {
        handleInputChange(event, this);
    };

    onLogupClicked = (event) => {
        const { userSigningUp } = this.props;
        userSigningUp(this.state);
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
                        <Link to="/score" className="link"><Button
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
                                error={user.errors && user.errors.email ? true : false}
                            />
                            <FormControl
                                error={user.errors && user.errors.password ? true : false}
                                required={true}
                            >
                                <InputLabel htmlFor="signIn-password">Пароль</InputLabel>
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

                            <Button
                                className="login-window__button _send"
                                variant="contained"
                                color="primary"
                                onClick = {this.onLogupClicked}>
                                Зарегистрироваться
                            </Button>
                            {(user.errors) ?
                                Object.keys(user.errors).map(err => {
                                    return <div key={err} className="login-window__error">{err} {user.errors[err][0]}</div>
                                }) :
                                ''}
                        </FormGroup>
                    </Paper>
                }
            </div>
        );
    }
}

export default Logup;