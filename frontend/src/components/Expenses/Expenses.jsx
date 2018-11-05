import './Expenses.scss';

import React, { PureComponent } from 'react';

class Expenses extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <div className="expenses">Expenses</div>
        );
    }
}

export default Expenses;