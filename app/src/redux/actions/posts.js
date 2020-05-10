import { CREATE_POST, GET_POST } from "../types/posts"
import { v4 as uuidv4 } from "uuid"
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

export const createPost = (content, user, category) => async (dispatch) => {
    var moment = require("moment")
    try {
        const url = "https://advicetracker.life/api/posts/"
        const newPost = {
            content: content,
            content_stripped: content.replace(/<[^>]*>?/gm, ""),
            category: category,
            likes: 0,
            post_date: moment().toString(),
            post_date_timestamp: moment().format("x"),
            user_id: user.userID,
            user_name: user.username,
            profile_url: "https://advicetracker.life/profile/" + user.userID,
            user_image_url: user.profileUrl,
            permalink:
                "https://advicetracker.life/browse/" +
                category[0].replace(/ /g, "_") +
                "/" +
                content
                    .replace(/<[^>]*>?/gm, "")
                    .slice(0, 40)
                    .replace(/ /g, "_") +
                "/",
            comments: null,
            num_of_comments: 0,
            post_id: uuidv4(),
            objectID: uuidv4(),
        }

        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
        }).then(() => {
            Toast.fire({
                icon: "success",
                title: "Sucessfully created post.",
            })
            //dispatch({ type: CREATE_POST, payload: {} })
        })
    } catch (error) {
        console.log(error)
    }
}

export const getPost = (categoryName, content) => async (dispatch) => {
    try {
        const url = "https://advicetracker.life/api/posts/"

        const token = localStorage.getItem("jwtToken")
        await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: "https://advicetracker.life/" + categoryName + "/" + content,
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: GET_POST, payload: data })
            })
    } catch (error) {
        console.log(error)
    }
}
