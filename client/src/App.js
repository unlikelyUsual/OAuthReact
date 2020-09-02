import React from "react";
import "./App.css";
import Landing from "./components/interface/Landing";
import Header from "./components/interface/Header";
import Footer from "./components/interface/Footer";
import UserAccount from "./components/user/UserAccount";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import {LOGIN_USER} from './actions/actionTypes';


(async () => {
  const request = await fetch("http://localhost:5000/auth/login/success", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
    },
  });

  const res = await request.json();

  if(request.status == 200){
    //Set User in Store
    store.dispatch({
      type: LOGIN_USER,
      payload : {
        user : res.user
      }
    });
  }

})();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header/>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/account" component={UserAccount}></Route>
          <Route
            path="http//:localhost:5000/auth/login/success"
            component={UserAccount}
          ></Route>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
