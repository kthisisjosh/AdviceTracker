import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE } from "../types/advice"

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
                inboxAdvice: [
                    {
                        content: action.payload,
                        category: "",
                        userID: "",
                        likes: null,
                        datePosted: null,
                        comments: [],
                        id: "",
                    },
                    ...state.inboxAdvice,
                ],
            }

        default:
            return state
    }
}
