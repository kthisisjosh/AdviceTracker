import { combineReducers } from "redux"
import users from "../reducers/users"
import auth from "../reducers/auth"
import advice from "../reducers/advice"
import posts from "../reducers/posts"

export default combineReducers({
    userState: users,
    authState: auth,
    adviceState: advice,
    postsState: posts,
})
