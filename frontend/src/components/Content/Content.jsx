import './Content.scss';

import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';

export class Container extends PureComponent {
    render() {
        const { box, ...other } = this.props;
        return (
            <Grid container {...(box ? {className: 'content-box'} : {})} {...other}/>
        );
    }
}

export class Item extends PureComponent {
    render() {
        const { noSpace, ...other } = this.props;
        return (
            <Grid item {...(noSpace ? {} : {className: 'content-item'})} {...other} />
        );
    }
}