import React from "react"
import ReactDOM from "react-dom"
import FriendsPage from "../FriendsPage"
import { BrowserRouter as Router } from "react-router-dom"
import store from "../../../redux"
import { Provider } from "react-redux"


it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <FriendsPage />
            </Router>
        </Provider>,
        div
    )
})