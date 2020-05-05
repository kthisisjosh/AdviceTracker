import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE, DELETE_INBOX_ADVICE, GET_ADVICE, SUBMIT_CATEGORY, SUBMIT_ADVICE } from "../types/advice"
import { v4 as uuidv4 } from "uuid"

export const getInboxAdvice = (id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/inbox/" + id
        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: GET_INBOX_ADVICE, payload: data })
            })
    } catch (error) {
        console.log(error)
    }
}

export const getAdvice = (id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/" + id
        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: GET_ADVICE, payload: data })
            })
    } catch (error) {
        console.log(error)
    }
}

export const submitInboxAdvice = (advice, id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/inbox/"
        const token = localStorage.getItem("jwtToken")
        const newInboxAdvice = {
            content: advice,
            inInbox: 1,
            userID: id,
            likes: null,
            datePosted: null,
            comments: [],
            adviceID: uuidv4(),
        }
        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newInboxAdvice),
        }).then(() => {
            dispatch({ type: SUBMIT_INBOX_ADVICE, payload: newInboxAdvice })
        })
    } catch (error) {
        console.log(error)
    }
}

export const submitAdvice = (advice, category, currSubcategory, id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/"
        const token = localStorage.getItem("jwtToken")
        const newAdvice = {
            content: advice,
            inInbox: 0,
            subcategoryID: currSubcategory.subcategoryID,
            userID: id,
            likes: null,
            datePosted: null,
            comments: [],
            adviceID: uuidv4(),
        }
        const filteredSubcategories = category.subcategories.filter((subcategory) => {
            return subcategory.subcategoryID !== currSubcategory.subcategoryID
        })

        const newSubcategory = { ...currSubcategory, advice: [newAdvice, ...currSubcategory.advice] }

        const newCategory = { ...category, subcategories: [newSubcategory, ...filteredSubcategories] }

        dispatch({ type: SUBMIT_ADVICE, payload: newCategory })
        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAdvice),
        })
    } catch (error) {
        console.log(error)
    }
}

export const submitCategory = (category, id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/categories/"
        const token = localStorage.getItem("jwtToken")
        const newCategory = {
            name: category.title,
            categoryID: uuidv4(),
            userID: id,
            description: category.description,
            isSubcategory: 0,
            subcategoryID: null,
        }
        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCategory),
        }).then(() => {
            dispatch({ type: SUBMIT_CATEGORY, payload: { ...newCategory, subcategories: [] } })
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteInboxAdvice = (advice) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_INBOX_ADVICE, payload: advice.adviceID })
        const token = localStorage.getItem("jwtToken")
        const url = "https://advicetracker.life/api/advice/inbox/" + advice.adviceID
        await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.log(error)
    }
}
