import { combineReducers } from "redux"
import { sessionReducer } from "redux-react-session"
import users from "../reducers/users"
import auth from "../reducers/auth"
import advice from "../reducers/advice"
import posts from "../reducers/posts"

export default combineReducers({
    userState: users,
    authState: auth,
    sessionState: sessionReducer,
    adviceState: advice,
    postsState: posts,
})
