import { GET_USERS, CREATE_USER, DELETE_USER } from "../types/users"

export default (state = { users: [] }, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload.map((person) => {
                    return { ...person }
                }),
            }
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((user) => user.id != action.payload),
            }
        default:
            return state
    }
}
