/********************************************************************
* Includes															*
*********************************************************************/
//Migration to typography v2
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
/*Include styles*/
import './sass/main.scss';

/*Incude libraries*/ 
import  React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

/*Import user components*/

import Navtop from 'components/Navtop';
import Header from 'components/Header';
import Footer from 'components/Footer';
//import 'react-holder-component';

import rootReduser from './reducers';
import routes from './routes';

/********************************************************************
* Main															*
*********************************************************************/
const store = createStore(
    rootReduser,
    applyMiddleware(thunk),
);


class App extends Component{
    render(){
        return(
            <Fragment>
                <div className="container">
                    <Navtop />
                    <main className="main">
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                        </Switch>
                    </main>
                </div>
                <Footer className="footer" />
            </Fragment>
        );
    }
}
/*Запуск отрисовки*/
ReactDom.render(
    <Provider store = {store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('web-page'));
