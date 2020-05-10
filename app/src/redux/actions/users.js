import { GET_USER_INFO } from "../types/users"

export const getUserInfo = (username) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/users/" + username
        
        await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch({ type: GET_USER_INFO, payload: data })
            })
    } catch (error) {
        console.log(error)
    }
}
