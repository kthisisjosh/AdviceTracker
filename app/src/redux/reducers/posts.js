import { CREATE_POST, GET_POST } from "../types/posts"

const initialState = {
    currentPost: {
        content: "",
        content_stripped: "",
        category: "",
        likes: 0,
        post_date: "",
        post_date_timestamp: 0,
        user_id: "",
        user_name: "",
        profile_url: "",
        user_image_url: "",
        permalink: "",
        comments: null,
        num_of_comments: 0,
        post_id: "",
        objectID: "",
    },
}

export default (state = initialState, action) => {
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
