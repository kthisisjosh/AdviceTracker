import {
    GET_INBOX_ADVICE,
    SUBMIT_INBOX_ADVICE,
    DELETE_INBOX_ADVICE,
    DELETE_CATEGORY,
    DELETE_SUBCATEGORY,
    GET_ADVICE,
    SUBMIT_CATEGORY,
    SUBMIT_ADVICE,
    SUBMIT_SUBCATEGORY,
} from "../types/advice"

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
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => category.categoryID !== action.payload),
            }
        case DELETE_SUBCATEGORY:
            const filteredSubCategories = state.categories.filter((category) => {
                return category.categoryID !== action.payload.categoryID
            })
            return {
                ...state,
                categories: [...filteredSubCategories, action.payload],
            }
        case GET_ADVICE:
            return {
                ...state,
                categories: [...action.payload],
            }
        case SUBMIT_CATEGORY:
            return {
                ...state,
                categories: [action.payload, ...state.categories],
            }
        case SUBMIT_SUBCATEGORY:
            const filteredSubCategories2 = state.categories.filter((category) => {
                return category.categoryID !== action.payload.categoryID
            })
            return {
                ...state,
                categories: [action.payload, ...filteredSubCategories2],
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
