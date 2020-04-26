import React from "react"
import store from "../../../redux"
import { Provider } from "react-redux"
import renderer from "react-test-renderer"
import LoginPage from "../LoginPage"
import { BrowserRouter as Router } from "react-router-dom"
import authReducer from "../../../redux/reducers/auth"
import { LOGIN_SUCCESS, LOGOUT } from "../../../redux/types/auth"

describe("<LoginPage />", () => {
    it("should render and match the snapshot", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <LoginPage />
                </Router>
            </Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe("LoginPage Auth Reducer", () => {
        let state
        beforeEach(() => {
            state = {
                token: null,
                isAuthenticated: null,
                loading: true,
                user: null,
            }
        })

        it("should return the initial state", () => {
            const expectedResult = state
            expect(authReducer(undefined, {})).toEqual(expectedResult)
        })

        it("should handle the LOGIN_SUCCESS dispatch correctly", () => {
            const fixture = {
                token: "test-token",
                user: {
                    userID: "test-id",
                    username: "test",
                    email: "test",
                    token: "test-token",
                },
            }
            const expectedResult = {
                token: null,
                isAuthenticated: true,
                loading: false,
                user: {
                    userID: "test-id",
                    username: "test",
                    email: "test",
                    token: "test-token",
                },
            }

            expect(authReducer(state, { type: LOGIN_SUCCESS, payload: fixture })).toEqual(expectedResult)
        })

        it("should handle the LOGOUT dispatch correctly", () => {
            const loginState = {
                token: "test-token",
                user: {
                    userID: "test-id",
                    username: "test",
                    email: "test",
                    token: "test-token",
                },
            }

            expect(authReducer(loginState, { type: LOGOUT })).toEqual(state)
        })
    })
})
