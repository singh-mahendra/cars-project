import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import "./styles.scss";
import ListPage from "./containers/ListPage";
import DetailPage from "./containers/DetailPage";
import NotFound from "./containers/NotFound";
import combineReducers from './reducers/index';
import {getAllCarsWatcher, sortCarsWatcher, filterCarsWatcher, getAllManufacturersWatcher, getAllColorsWatcher} from './sagas/watchers';


const sagas = createSagaMiddleware();
const store = createStore(combineReducers, compose(applyMiddleware(sagas),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

class App extends React.Component {
  render() {
    return (
      <>
      <Router>

      <Switch>
        <Route path="/" exact component={ListPage} />
        <Route path="/detail" component={DetailPage} />
        <Route component={NotFound} />
      </Switch>

      </Router>
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