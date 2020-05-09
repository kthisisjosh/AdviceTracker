import { LOGIN_SUCCESS, LOGIN_FAIL } from "../types/auth"
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

export const googleLogin = (response) => async (dispatch) => {
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
                dispatch({ type: LOGIN_SUCCESS, payload: data })
                Toast.fire({
                    icon: "success",
                    title: "Signed in successfully",
                })
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
