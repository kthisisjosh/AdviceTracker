import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE } from "../types/advice"

export const getInboxAdvice = () => async (dispatch) => {
    try {
        const url = "http://192.168.99.100:8080/api/advice/inbox/1" // add user id?
        await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: GET_INBOX_ADVICE, payload: data })
            })
    } catch (error) {
        console.log(error)
        //dispatch(setAlert(error.message, "error", 5000))
    }
}

export const submitInboxAdvice = (advice) => async (dispatch) => {
    try {
        const url = "http://192.168.99.100:8080/api/advice/inbox/1" // add user id?
        const newInboxAdvice = {
            content: advice,
            inInbox: 1,
            category: "",
            userID: "1",
            likes: null,
            datePosted: null,
            comments: [],
            adviceID: "1"
        }
        await fetch(url, {
            method: "POST",
            headers: {
                //Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newInboxAdvice),
        }).then(() => {
            dispatch({ type: SUBMIT_INBOX_ADVICE, payload: newInboxAdvice })
        })
    } catch (error) {
        console.log(error)
        //dispatch(setAlert(error.message, "error", 5000))
    }
}
