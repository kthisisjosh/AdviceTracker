import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE, DELETE_INBOX_ADVICE } from "../types/advice"

const initialState = {
    inboxAdvice: [],
    categories: [
        {
            name: "Career",
            subCategories: [
                {
                    name: "Negotiation",
                    advice: [
                        {
                            content: "Lorem ipsum.",
                            category: "",
                            userID: "",
                            likes: null,
                            datePosted: null,
                            comments: [],
                            id: "",
                        },
                    ],
                    id: "",
                },
            ],
            id: "",
        },
    ],
    browseAdvice: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INBOX_ADVICE:
            return { ...state, inboxAdvice: action.payload }

        case SUBMIT_INBOX_ADVICE:
            return {
                ...state,
                inboxAdvice: [action.payload, ...state.inboxAdvice],
            }
        case DELETE_INBOX_ADVICE:
            return {
                ...state,
                inboxAdvice: state.inboxAdvice.filter((advice) => advice.adviceID !== action.payload),
            }
        default:
            return state
    }
}
