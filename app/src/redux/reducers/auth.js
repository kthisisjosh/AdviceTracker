import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types/auth"

const initialState = {
    token: null,
    isAuthenticated: null,
    loading: true,
    user: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            //localStorage.setItem("jwtToken", payload.token)
            return { ...state, isAuthenticated: true, loading: false, user: action.payload}
        case LOGIN_FAIL:
        case LOGOUT:
            //localStorage.removeItem("jwtToken")
            return initialState
        default:
            return state
    }
}
