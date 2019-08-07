import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';

import "./styles.css";
import "./styles.scss";
import combineReducers from './reducers/index';
import {getAllCarsWatcher, sortCarsWatcher, filterCarsWatcher, getAllManufacturersWatcher, getAllColorsWatcher} from './sagas/watchers';
import ShellPage from "./containers/ShellPage";


const sagas = createSagaMiddleware();
const store = createStore(combineReducers, compose(applyMiddleware(sagas),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

class App extends React.Component {
  render() {
    return (
      <>
        <ShellPage></ShellPage>
      </>
      );
  }
}

sagas.run(getAllCarsWatcher);
sagas.run(sortCarsWatcher);
sagas.run(filterCarsWatcher);
sagas.run(getAllManufacturersWatcher);
sagas.run(getAllColorsWatcher);


const AppJsx = (<Provider store={store}><App/></Provider>);

var mountNode = document.getElementById("app");
ReactDOM.render(AppJsx, mountNode);