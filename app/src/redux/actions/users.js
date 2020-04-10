import { GET_USERS, CREATE_USER, DELETE_USER } from "../types/users"

export const getUsers = () => async (dispatch) => {
    await fetch("http://localhost:8080/api/mock")
        .then((response) => response.json())
        .then((data) => {
            dispatch({ type: GET_USERS, payload: data })
        })
}

export const createUser = (user) => async (dispatch) => {
    await fetch("http://localhost:8080/api/mock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
    }).then(() => {
        dispatch({type: CREATE_USER, payload: user})
    })
}

export const deleteUser = id => async dispatch => {

    dispatch({type: DELETE_USER, payload: id})
    console.log("http://localhost:8080/api/mock/"+id);
    
    await fetch("http://localhost:8080/api/mock/"+id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    })
}