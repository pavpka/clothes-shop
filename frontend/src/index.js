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

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/men" component={Men}/>
                <Route path="/lookbook" component={Lookbook}/>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
