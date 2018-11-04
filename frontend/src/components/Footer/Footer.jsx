import './Footer.scss';

import React, { PureComponent } from 'react';

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <div className="footer">&copy;GeekMoney</div>
        );
    }
}

export default Footer;