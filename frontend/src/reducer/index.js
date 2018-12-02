import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import clothes from './clothes'

export default combineReducers({
    routing: routerReducer,
    clothes,
})
