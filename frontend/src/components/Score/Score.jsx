import './Score.scss';

import React, { PureComponent } from 'react';

class Score extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
  
    render() {
        return (
            <div className="score">Score</div>
        );
    }
}

export default Score;