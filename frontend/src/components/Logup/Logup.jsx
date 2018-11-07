import './Logup.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { handleInputChange } from 'containers/handleChange';
import FormGroup from "@material-ui/core/FormGroup/FormGroup";
import Paper from "@material-ui/core/Paper/Paper";
import Avatar from "@material-ui/core/Avatar/Avatar";

import LockIcon from '@material-ui/icons/LockOutlined';

class Logup extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            remember_me: false,
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
                                id="signIn-email"
                                autoFocus={true}
                                label="Электронная почта"
                                name="email"
                                margin="normal"
                                placeholder="test12@test.ru"
                                required={true}
                                type="email"
                                onChange={this.onHandleInputChange}
                            />
                            <TextField
                                required={true}
                                id="signIn-password"
                                name="password"
                                label="Пароль"
                                type="password"
                                margin="normal"
                                placeholder="111111"
                                onChange={this.onHandleInputChange}
                            />
                            <Button
                                className="login-window__button _send"
                                variant="contained"
                                color="primary"
                                onClick = {this.onLogupClicked}>
                                Зарегистрироваться
                            </Button>
                            {(user.error) ?
                                <p className='error-meassage'>{user.error}</p> :
                                ''}
                        </FormGroup>
                    </Paper>
                }
            </div>
        );
    }
}

export default Logup;