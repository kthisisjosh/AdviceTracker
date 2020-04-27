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
        const url = "/api/users/"
        const response = await fetch(url, options)
        const responseData = await response.json();
        
        if (response.ok) {
            dispatch({ type: LOGIN_SUCCESS, payload: responseData })
        }

        if (responseData.error) {
            dispatch({ type: LOGIN_FAIL })
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAIL })
    }
}

export const githubLogin = ({ profileObj }) => async (dispatch) => {
    //
}
