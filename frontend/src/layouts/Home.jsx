import React from 'react';
import {Container, Item} from 'components/Content';

const Home = function() {
    return (
        <Container box>
            <Item noSpace>
                <h2>GeekMoney - Личные финансы</h2>
                <ul>
                    <li>Управляйте всеми своими учетными записями, бюджетами и счетами в одном месте</li>
                    <li>Автоматическая синхронизация между устройствами</li>
                    <li>Автоматическая категоризация, которая учится у вас</li>
                    <li>Полнофункциональный на каждой платформе</li>
                    <li>Чрезвычайно универсальный и настраиваемый</li>
                </ul>
            </Item>
        </Container>
    );
};

export default Home;