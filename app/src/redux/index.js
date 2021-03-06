import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { sessionService } from "redux-react-session"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {
    sessionState: {
        authenticated: false,
        checked: false,
        invalid: false,
        user: {
            userID: "",
            username: "",
            email: "",
            token: "",
            profileUrl: "",
        },
    },
}
const middleware = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

sessionService.initSessionService(store, { driver: "COOKIES" })

export default store
