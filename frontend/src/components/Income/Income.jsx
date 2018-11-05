import './Income.scss';

import React, { PureComponent } from 'react';

class Income extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <div className="income">Income</div>
        );
    }
}

export default Income;