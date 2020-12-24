import {combineReducers} from 'redux';

import app from './app';
import user from './user';

const reducers = {app, user};

const rootReducer = combineReducers(reducers);

export default rootReducer;
