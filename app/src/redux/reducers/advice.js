import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE, DELETE_INBOX_ADVICE, GET_ADVICE, SUBMIT_CATEGORY, SUBMIT_ADVICE } from "../types/advice"

const initialState = {
    inboxAdvice: [],
    categories: [],
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
        case SUBMIT_CATEGORY:
            return {
                ...state,
                categories: [action.payload, ...state.categories],
            }
        case SUBMIT_ADVICE:
            const filteredCategories = state.categories.filter((category) => {
                return category.categoryID !== action.payload.categoryID
            })
            return {
                ...state,
                categories: [action.payload, ...filteredCategories],
            }
        default:
            return state
    }
}
