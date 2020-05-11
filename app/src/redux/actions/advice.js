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
    DELETE_ADVICE,
    UPDATE_ADVICE,
} from "../types/advice"
import { v4 as uuidv4 } from "uuid"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
    },
})

export const getInboxAdvice = (id) => async (dispatch) => {
    try {
        if (id === "" || id === null) return null
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
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const getAdvice = (id, categories) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/" + id
        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                if (JSON.stringify(data) !== JSON.stringify(categories)) dispatch({ type: GET_ADVICE, payload: data })
            })
            .catch((err) => console.log(err))
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
        })
            .then(() => {
                dispatch({ type: SUBMIT_INBOX_ADVICE, payload: newInboxAdvice })
            })
            .catch((err) => console.log(err))
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
            categoryID: category.categoryID,
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

        const updatedCategory = { ...category, subcategories: [newSubcategory, ...filteredSubcategories] }

        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAdvice),
        })
            .then(() => dispatch({ type: SUBMIT_ADVICE, payload: updatedCategory }))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const submitCategory = (category, id) => async (dispatch) => {
    try {
        console.log(id)
        const url = "https://advicetracker.life/api/advice/categories/"
        const token = localStorage.getItem("jwtToken")
        const updatedCategory = {
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
            body: JSON.stringify(updatedCategory),
        })
            .then(() => {
                dispatch({ type: SUBMIT_CATEGORY, payload: { ...updatedCategory, subcategories: [] } })
            })
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const submitSubCategory = (name, category, id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/subcategories/"
        const token = localStorage.getItem("jwtToken")
        const newSubCategory = {
            name: name,
            categoryID: category.categoryID,
            userID: id,
            description: null,
            isSubcategory: 1,
            subcategoryID: uuidv4(),
            advice: [],
        }

        const updatedCategory = { ...category, subcategories: [newSubCategory, ...category.subcategories] }

        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSubCategory),
        })
            .then(() => {
                dispatch({ type: SUBMIT_SUBCATEGORY, payload: updatedCategory })
                setTimeout(() => null, 500)
            })
            .catch((err) => console.log(err))
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
            .then(() => Swal.fire("Deleted!", `The advice has been succesfully deleted.`, "success"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const deleteAdvice = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_ADVICE, payload: id })
        const token = localStorage.getItem("jwtToken")
        const url = "https://advicetracker.life/api/advice/" + id
        await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then(() => Swal.fire("Deleted!", `The advice has been succesfully deleted.`, "success"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const deleteCategory = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CATEGORY, payload: id })
        const token = localStorage.getItem("jwtToken")
        const url = "https://advicetracker.life/api/advice/categories/" + id
        await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then(() => Swal.fire("Deleted!", `The category has been succesfully deleted.`, "success"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const deleteSubCategory = (category, id) => async (dispatch) => {
    try {
        const filteredSubcategories = category.subcategories.filter((subcategory) => subcategory.subcategoryID !== id)
        dispatch({ type: DELETE_SUBCATEGORY, payload: { ...category, subcategories: filteredSubcategories } })
        const token = localStorage.getItem("jwtToken")
        const url = "https://advicetracker.life/api/advice/subcategories/" + id
        await fetch(url, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then(() => Swal.fire("Deleted!", `The sub-category has been succesfully deleted.`, "success"))
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const updateAdvice = (content, id) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/" + id

        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content }),
        })
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: "Successfully edited advice.",
                })
                //dispatch({ type: UPDATE_ADVICE, payload: {} })
            })
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const updateCategory = (name, description, id, history) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/categories/" + id

        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, description }),
        })
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: "Successfully edited category.",
                })
                history.push("/dashboard")
                //dispatch({ type: UPDATE_ADVICE, payload: newCategory })
            })
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}

export const updateSubCategory = (name, id, history) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/advice/subcategories/" + id

        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name }),
        })
            .then(() => {
                Toast.fire({
                    icon: "success",
                    title: "Successfully edited sub-category.",
                })
                history.push("/dashboard")
                //dispatch({ type: UPDATE_ADVICE, payload: newCategory })
            })
            .catch((err) => console.log(err))
    } catch (error) {
        console.log(error)
    }
}
