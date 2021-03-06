import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types/auth"
import { sessionService } from "redux-react-session"

const initialState = {
    token: localStorage.getItem("jwtToken"),
    isAuthenticated: null,
    loading: true,
    user: {
        userID: "",
        username: "",
        email: "",
        token: "",
        profileUrl: "",
    },
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("jwtToken", action.payload.token)
            return { ...state, isAuthenticated: true, loading: false, user: { ...action.payload.user, token: action.payload.token } }
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("jwtToken")
            sessionService.deleteSession()
            sessionService.deleteUser()
            return initialState
        default:
            return state
    }
}
