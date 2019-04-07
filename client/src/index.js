import React, { useContext, useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "./pages/App";
import Splash from "./pages/Splash";

import "mapbox-gl/dist/mapbox-gl.css";
import Context from "./context";
import reducer from "./reducer";
import * as serviceWorker from "./serviceWorker";

const Root = () => {
  // useContext hookの戻り値による初期状態の定義
  const initialState = useContext(Context);
  // useReducer hookの戻り値を配列に格納
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state });

  return (
    <Router>
      {/* Contextのインスタンスによるプロバイダ定義 */}
      <Context.Provider value={{ state, dispatch }}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={Splash} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
