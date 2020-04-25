import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/auth"

export const googleLogin = ({ profileObj }) => async (dispatch) => {
    try {
        const newUser = {
            id: profileObj.googleId,
            username: profileObj.name,
            email: profileObj.email,
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        }
        dispatch({ type: LOGIN_SUCCESS, payload: newUser })
        const url = "http://192.168.99.100:8080/api/users/"
        await fetch(url, options)

        //if (responseData.error) {
        //    dispatch({ type: LOGIN_FAIL })
        //}
    } catch (error) {
        dispatch({ type: LOGIN_FAIL })
    }
}

export const githubLogin = ({ profileObj }) => async (dispatch) => {
    //
}
