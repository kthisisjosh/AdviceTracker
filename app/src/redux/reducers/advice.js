import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE, DELETE_INBOX_ADVICE, GET_ADVICE } from "../types/advice"

const initialState = {
    inboxAdvice: [],
    categories: [
        {
            name: "Career",
            categoryID: "1",
            description: "Career description advice",
            subcategories: [
                {
                    name: "Negotiation",
                    advice: [
                        {
                            adviceID: "1",
                            content: "<p>Negotiation Advice</p>"
                        }
                    ]
                },
                {
                    name: "Productivity",
                    advice: [
                        {
                            adviceID: "2",
                            content: "<p>Productivity Advice</p>"
                        }
                    ]
                }
            ],
        },
    ],
    browseAdvice: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_INBOX_ADVICE:
            return { ...state, inboxAdvice: [...action.payload] }

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
        case GET_ADVICE:
            return {
                ...state,
                categories: [...action.payload, ...state.categories],
            }
        default:
            return state
    }
}
