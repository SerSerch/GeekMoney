import './Header.scss';

import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        const { match, location, history } = this.props;
        return (
            <h1>Hello GeekMoney!</h1>
        );
    }
}

export default withRouter(Header);