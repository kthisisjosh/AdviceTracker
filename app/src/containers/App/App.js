import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import LoginPage from "../LoginPage/LoginPage"

//Redux
//import { Provider } from 'react-redux';
//import store from './store';

function App() {
    return (
        <Router>
            <Switch>
                <Route component={HomePage} exact path="/" />
                <Route component={LoginPage} path="/login" />
            </Switch>
        </Router>
    )
}

export default App
