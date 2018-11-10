import './Landing.scss';

import React, { PureComponent } from 'react';

class Landing extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="landing">
                <h2>GeekMoney - Личные финансы</h2>
                <ul>
                    <li>Управляйте всеми своими учетными записями, бюджетами и счетами в одном месте</li>
                    <li>Автоматическая синхронизация между устройствами</li>
                    <li>Автоматическая категоризация, которая учится у вас</li>
                    <li>Полнофункциональный на каждой платформе</li>
                    <li>Чрезвычайно универсальный и настраиваемый</li>
                </ul>
            </div>
        );
    }
}

export default Landing;