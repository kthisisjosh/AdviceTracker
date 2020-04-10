import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "../HomePage/HomePage"
import LoginPage from "../LoginPage/LoginPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import FriendsPage from "../FriendsPage/FriendsPage"
import "../../app.css"

//Redux
import { Provider } from "react-redux"
import store from "../../redux"

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route component={LoginPage} exact path="/" />
                    <Route component={HomePage} path="/home" />
                    <Route component={ProfilePage} exact path="/profile" />
                    <Route component={FriendsPage} path="/friends" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
