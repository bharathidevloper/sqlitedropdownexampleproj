
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

// Redux
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

// Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './app/saga/RootSaga';

//combine reducer
import allReducers from './app/reducers/index';

// Navigator
import AppNavigator from './app/navigators/AppNavigator';

const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
);
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);

