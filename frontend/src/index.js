import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Switch,} from 'react-router-dom';
import store from './store';
import Main from './component/Main';
import './css/index.css';
import Men from './component/Men';
import Lookbook from './component/Lookbook'

import registerServiceWorker from './registerServiceWorker';
import Woman from "./component/Woman";

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/men" component={Men}/>
                <Route path="/lookbook" component={Lookbook}/>
                <Route path="/woman" component={Woman}/>
                <Route path="/woman/blouses" component={Woman}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
