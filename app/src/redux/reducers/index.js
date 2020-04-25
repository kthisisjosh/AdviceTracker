import { combineReducers } from "redux"
import users from "../reducers/users"
import advice from "../reducers/advice"

export default combineReducers({
    userState: users,
    adviceState: advice,
})
