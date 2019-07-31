import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "./styles.scss";
import CarsList from "./containers/CarsList";

class App extends React.Component {
  render() {
    return <CarsList></CarsList>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App/>, mountNode);