import React from "react"
import ReactDOM from "react-dom"
import store from "../../../redux"
import { Provider } from "react-redux"
import LoginPage from "../LoginPage"
import { BrowserRouter as Router } from "react-router-dom"

it("renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <LoginPage />
            </Router>
        </Provider>,
        div
    )
})
