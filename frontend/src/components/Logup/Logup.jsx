import './Logup.scss';

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import handleChange from 'containers/handleChange';

class Logup extends PureComponent {
    constructor(props) {
        super(props);

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

    onHandleChange = (event) => {
        handleChange(event, this);
    };

    onLogupClicked = (event) => {
        const { userSigningUp } = this.props;
        userSigningUp(this.state);
    };

    onOutClicked = (event) => {
        //todo сделать нормальный выход пользователя
        delete localStorage.user;
    };

    render()
        {
        const {user} = this.props;
        return (
            <div className="login-window">
                { (user.isLogined) ?
                    <p> Вы уже вошли как {user.user.email}. Ваш номер {user.user.id}
                        <Link to="/score"><Button
                            variant="contained"
                            color="primary"
                            >
                            Начать
                        </Button></Link>
                        <a href="/logup"><Button
                            variant="contained"
                            color="primary"
                            onClick = {this.onOutClicked}>
                            Выход
                        </Button></a></p> :
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
                            onClick = {this.onLogupClicked}>
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

export default Logup;