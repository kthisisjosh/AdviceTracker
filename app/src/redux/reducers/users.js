import { GET_USER_INFO } from "../types/users"

export default (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state
    }
}
