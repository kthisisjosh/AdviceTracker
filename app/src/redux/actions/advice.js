import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE, DELETE_INBOX_ADVICE } from "../types/advice"
import { v4 as uuidv4 } from "uuid"

export const getInboxAdvice = (id) => async (dispatch) => {
    try {
        const url = "http://192.168.99.100:8080/api/advice/inbox/" + id
        const token = localStorage.getItem('jwtToken');
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

export const submitInboxAdvice = (advice, id) => async (dispatch) => {
    try {
        const url = "http://192.168.99.100:8080/api/advice/inbox/" + id
        const token = localStorage.getItem('jwtToken');
        const newInboxAdvice = {
            content: advice,
            inInbox: 1,
            category: "",
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

export const deleteInboxAdvice = (advice) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_INBOX_ADVICE, payload: advice.adviceID })
        const token = localStorage.getItem('jwtToken');
        const url = "http://192.168.99.100:8080/api/advice/inbox/" + advice.adviceID
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