import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types/auth"

const initialState = {
    token: localStorage.getItem("jwtToken"),
    isAuthenticated: null,
    loading: true,
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("jwtToken", action.payload.token)
            return { ...state, isAuthenticated: true, loading: false, user: action.payload.user }
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem("jwtToken")
            return initialState
        default:
            return state
    }
}
