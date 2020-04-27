import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/auth"

export const googleLogin = ({ profileObj }) => async (dispatch) => {
    console.log(profileObj)

    try {
        const newUser = {
            id: profileObj.googleId,
            username: profileObj.name,
            email: profileObj.email,
        }
        console.log(newUser)

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        }
        const url = "https://advicetracker.life/api/users/"
        await fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: LOGIN_SUCCESS, payload: data })
            })
            .catch(() => {
                dispatch({ type: LOGIN_FAIL })
            })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL })
    }
}

export const githubLogin = ({ profileObj }) => async (dispatch) => {
    //
}
