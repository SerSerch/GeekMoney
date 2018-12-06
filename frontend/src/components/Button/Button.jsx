import './Button.scss';

import React, { PureComponent } from 'react';
import ButtonM from "@material-ui/core/Button";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    contained: {
        minWidth: '290px',
        minHeight: '40px',
        padding: '5px 15px',
        backgroundColor: '#ef6c00',
        '&:hover': {
            backgroundColor: '#fc831f'
        },
    },
    outlined: {
        minWidth: '290px',
        minHeight: '40px',
        padding: '3px 13px',
        border: '2px solid #ef6c00',
        color: '#ef6c00',
        '&:hover': {
            padding: '3px 13px',
            border: '2px solid #fc831f',
            backgroundColor: '#fee6d2',
            color: '#fc831f',
        },
    },
    text: {
        minWidth: '290px',
        minHeight: '40px',
        padding: '5px 15px',
        '&:hover': {
            padding: '5px 15px',
            backgroundColor: 'transparent',
            color: '#fc831f',
        },
    },
});

class Button extends PureComponent {
    render() {
        const { variant, onClick, classes, text, ...other } = this.props;
        return (
            <ButtonM
                className={classes[variant]}
                variant={variant}
                color="primary"
                onClick={onClick}
                {...other}
            >
                {text ? text : 'Button'}
            </ButtonM>
        );
    }
}

export default withStyles(styles)(Button);