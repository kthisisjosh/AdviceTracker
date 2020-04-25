import { GET_INBOX_ADVICE, SUBMIT_INBOX_ADVICE } from "../types/advice"

export const getInboxAdvice = () => async (dispatch) => {
    try {
        const url = "http://192.168.99.100:8080/api/advice/inbox"
        const response = await fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })

        const inboxAdvice = await response.json()

        if (response.ok) {
            dispatch({ type: GET_INBOX_ADVICE, payload: inboxAdvice })
        }
    } catch (error) {
        console.log(error);
        //dispatch(setAlert(error.message, "error", 5000))
    }
}
