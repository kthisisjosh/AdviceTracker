import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DashboardPage from "../DashboardPage/DashboardPage"
import LoginPage from "../LoginPage/LoginPage"
import LandingPage from "../LandingPage/LandingPage"
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
                    <Route component={LandingPage} exact path="/" />
                    <Route component={LoginPage} path="/login" />
                    <Route component={DashboardPage} path="/dashboard" />
                    <Route component={ProfilePage} exact path="/profile" />
                    <Route component={FriendsPage} path="/browse" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App