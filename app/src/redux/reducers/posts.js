import { CREATE_POST, GET_POST } from "../types/posts"

export default (state = {}, action) => {
    switch (action.type) {
        case GET_POST:
            return {
                ...state,
                currentPost: action.payload,
            }
        default:
            return state
    }
}
