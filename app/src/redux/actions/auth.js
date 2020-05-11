import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/auth"
import { sessionService } from "redux-react-session"
import { submitAdvice, submitCategory, submitSubCategory, getAdvice } from "./advice"
import Swal from "sweetalert2"

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2500,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
    },
})

export const googleLogin = (response, history, categories) => async (dispatch) => {
    const profileObj = response.profileObj
    try {
        const newUser = {
            id: profileObj.googleId,
            username: profileObj.name,
            email: profileObj.email,
            profileUrl: profileObj.imageUrl,
        }
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        }
        const url = "https://advicetracker.life/api/users/"
        await fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                sessionService
                    .saveSession({ token: data.token })
                    .then(() => {
                        sessionService
                            .saveUser(data.user)
                            .then(() => {
                                dispatch({ type: LOGIN_SUCCESS, payload: { ...data, token: data.token } })
                                history.push("/dashboard")
                                Toast.fire({
                                    icon: "success",
                                    title: "Signed in successfully",
                                })
                            })
                            .catch((err) => console.log(err))
                    })
                    .catch((err) => console.log(err))
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
