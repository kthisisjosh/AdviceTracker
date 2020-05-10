import {
    GET_INBOX_ADVICE,
    SUBMIT_INBOX_ADVICE,
    DELETE_INBOX_ADVICE,
    DELETE_CATEGORY,
    DELETE_SUBCATEGORY,
    DELETE_ADVICE,
    GET_ADVICE,
    SUBMIT_CATEGORY,
    SUBMIT_ADVICE,
    SUBMIT_SUBCATEGORY,
    UPDATE_ADVICE,
} from "../types/advice"

const initialState = {
    inboxAdvice: [
        {
            content: "",
            inInbox: 1,
            userID: "",
            likes: null,
            datePosted: null,
            comments: [],
            adviceID: "",
        },
    ],
    categories: [
        {
            name: "",
            categoryID: "",
            description: "",
            subcategories: [
                {
                    name: "",
                    subcategoryID: "",
                    advice: [
                        {
                            adviceID: "",
                            content: "",
                        },
                    ],
                },
            ],
        },
    ],
    browseAdvice: [],
}

export default (state = initialState, action) => {
    let filteredCategories = []
    if (state.categories[0].name !== "") {
        filteredCategories = state.categories.filter((category) => {
            return category.categoryID !== action.payload.categoryID
        })
    }
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
        case DELETE_ADVICE:
            return {
                ...state,
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter((category) => category.categoryID !== action.payload),
            }
        case DELETE_SUBCATEGORY:
            return {
                ...state,
                categories: [...filteredCategories, action.payload],
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
            return {
                ...state,
                categories: [action.payload, ...filteredCategories],
            }
        case SUBMIT_ADVICE:
            return {
                ...state,
                categories: [action.payload, ...filteredCategories],
            }
        case UPDATE_ADVICE:
            return {
                ...state,
            }
        default:
            return state
    }
}
