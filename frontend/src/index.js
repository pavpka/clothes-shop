import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Switch,} from 'react-router-dom';
import store from './store';
import Main from './component/Main';
import './css/index.css';

import registerServiceWorker from './registerServiceWorker';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Main}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
