import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
//import { startAction } from "./actions/startAction";
//import { stopAction } from "./actions/stopAction";
import rotateAction from "./actions/rotateAction";

function App(props) {
  console.log("props : ", props);
  return (
    <div className="App">
      <header
        className="App-header"
        onClick={() => props.rotateAction(!props.rotating)}
      >
        <img
          src={logo}
          className={"App-logo" + (props.rotating ? "" : " App-logo-paused")}
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  //startAction: () => dispatch(startAction),
  //stopAction: () => dispatch(stopAction)
  rotateAction: payload => dispatch(rotateAction(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
