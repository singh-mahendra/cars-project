import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';

import "./styles.css";
import "./styles.scss";
import ListPage from "./containers/ListPage";
import combineReducers from './reducers/index';
import {carsWatcher} from './sagas/carsSagas';

const sagas = createSagaMiddleware();
const store = createStore(combineReducers, compose(applyMiddleware(sagas),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

class App extends React.Component {
  render() {
    return <ListPage></ListPage>;
  }
}

sagas.run(carsWatcher);

const AppJsx = (<Provider store={store}><App/></Provider>);

var mountNode = document.getElementById("app");
ReactDOM.render(AppJsx, mountNode);