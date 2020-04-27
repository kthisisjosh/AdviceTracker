import { GET_USERS, CREATE_USER, DELETE_USER } from "../types/users"
import { v4 as uuidv4 } from "uuid"

export const getUsers = () => async (dispatch) => {
    await fetch("https://advicetracker.life/api/mock")
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: GET_USERS, payload: data })
        })
}

export const createUser = (user) => async (dispatch) => {
    if (user.id === null) {
        user.id = uuidv4()
    }
    await fetch("https://advicetracker.life/api/mock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    }).then(() => {
        dispatch({ type: CREATE_USER, payload: user })
    })
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: DELETE_USER, payload: id })

    await fetch("https://advicetracker.life/api/mock/" + id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
}
