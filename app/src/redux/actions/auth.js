import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/auth"

export const googleLogin = ({ profileObj }) => async (dispatch) => {
    try {
        const { email, googleId, name } = profileObj
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, googleId, name }),
        }
        const url = "/users/login/google"
        const response = await fetch(url, options)
        const responseData = await response.json()

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
