import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import DashboardPage from "../DashboardPage/DashboardPage"
import LoginPage from "../LoginPage/LoginPage"
import LandingPage from "../LandingPage/LandingPage"
import ProfilePage from "../ProfilePage/ProfilePage"
import BrowsePage from "../BrowsePage/BrowsePage"
import SubmitPage from "../SubmitPage/SubmitPage"
import CategoryPage from "../CategoryPage/CategoryPage"
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
                    <Route component={LoginPage} exact path="/login" />
                    <Route component={DashboardPage} exact path="/dashboard" />
                    <Route exact path="/dashboard/category/:id" component={CategoryPage} />
                    <Route component={null} exact path="/dashboard/subcategory/:id" />
                    <Route component={null} exact path="/dashboard/advice/:id" />
                    <Route component={ProfilePage} exact path="/profile" />
                    <Route component={BrowsePage} exact path="/browse" />
                    <Route component={SubmitPage} exact path="/submit" />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App
