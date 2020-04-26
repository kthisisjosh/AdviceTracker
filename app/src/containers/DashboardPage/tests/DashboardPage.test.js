import React from "react"
import DashboardPage from "../DashboardPage"
import { BrowserRouter as Router } from "react-router-dom"
import renderer from "react-test-renderer"
import store from "../../../redux"
import { Provider } from "react-redux"
import adviceReducer from "../../../redux/reducers/advice"
import { GET_INBOX_ADVICE } from "../../../redux/types/advice"

describe("<DashboardPage />", () => {
    it("should render and match the snapshot", () => {
        const component = renderer.create(
            <Provider store={store}>
                <Router>
                    <DashboardPage />
                </Router>
            </Provider>
        )
        let tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe("DashboardPage Inbox Advice Reducer", () => {
        let state
        beforeEach(() => {
            state = {
                inboxAdvice: [],
                categories: [],
                browseAdvice: [],
            }
        })

        it("should return the initial state", () => {
            const expectedResult = state
            expect(adviceReducer(undefined, {})).toEqual(expectedResult)
        })

        it("should dispatch GET_INBOX_ADVICE correctly", () => {
            const fixture = [
                {
                    adviceID: "test",
                    userID: "test",
                    inInbox: 1,
                    content: "test",
                    category: null,
                    numOfLikes: null,
                    datePosted: null,
                },
            ]

            const expectedResult = {
                inboxAdvice: [
                    {
                        adviceID: "test",
                        userID: "test",
                        inInbox: 1,
                        content: "test",
                        category: null,
                        numOfLikes: null,
                        datePosted: null,
                    },
                ],
                categories: [],
                browseAdvice: [],
            }

            expect(adviceReducer(state, { type: GET_INBOX_ADVICE, payload: fixture })).toEqual(expectedResult)
        })
    })
})
