import Landing from 'components/Landing';
//import Login from 'components/Login';
import Login from 'containers/UserLoginContainer';
import Logup from 'containers/UserLogupContainer';
import Score from 'components/Score';
import Income from 'components/Income';
import Expenses from 'components/Expenses';
import Transfer from 'components/Transfer';


export default [
    {
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
    {
        path: '/logup',
        component: Logup,
        exact: true
    },
    {
        path: '/score',
        component: Score,
        exact: true
    },
    {
        path: '/income',
        component: Income,
        exact: true
    },
    {
        path: '/expenses',
        component: Expenses,
        exact: true
    },
    {
        path: '/transfer',
        component: Transfer,
        exact: true
    },
]