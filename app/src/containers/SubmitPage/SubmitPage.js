import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography, Grid, Chip, Divider } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import UserInfo from "../../components/SubmitPage/UserInfo"
import SubmitBody from "../../components/SubmitPage/SubmitBody"
import CategorySubmitBody from "../../components/SubmitPage/CategorySubmitBody"
import { createPost } from "../../redux/actions/posts"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

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

const SubmitPage = (props) => {
    const { isAuthenticated, user, createPost } = props
    const [adviceContent, setAdviceContent] = useState("")
    const [categories, setCategories] = useState([])
    const history = useHistory()
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/login")
        }
    })

    const handleEditorChange = (content, editor) => {
        setAdviceContent(content)
    }

    const handleCategorySubmit = (category) => {
        setCategories((prevCategories) => [...prevCategories, category])
        Toast.fire({
            icon: "success",
            title: `Successfully added to the ${category} category.`,
        })
    }

    const handleSubmit = () => {
        MySwal.fire({
            title: "Create post?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, post it!",
        }).then((result) => {
            if (result.value) {
                if (categories.length === 0) {
                    MySwal.fire({
                        title: "Invalid category.",
                        text: "Please add at least one category.",
                        icon: "warning",
                    })
                } else if (categories.length >= 5) {
                    MySwal.fire({
                        title: "Invalid number of categories.",
                        text: "Please add a maximum of 4 categories. Copy and paste your advice and refresh the page to try again.",
                        icon: "warning",
                    })
                } else {
                    createPost(adviceContent, user, [...new Set(categories)], history)
                }
            }
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>Submit Advice | AdviceTracker</title>
                <meta
                    name="description"
                    content="Help others by submitting and sharing your advice for others to see. Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href="https://advicetracker.life/submit" />
            </Helmet>
            <Header />
            <Navbar />
            <Grid className="category-grid" container direction="column" style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
                <Grid item>
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                        Submit Your Own Advice
                    </Typography>
                </Grid>
                <UserInfo user={user} />
                <Divider style={{ margin: "3.5vh 0 1.5vh 0" }} variant="middle" className="submitpage-divider" />
                <CategorySubmitBody handleCategorySubmit={handleCategorySubmit} />
                <Grid item style={{ marginTop: "1.5vh" }}>
                    {categories.map((category) => (
                        <Chip style={{ marginRight: "0.5vw", backgroundColor: "#F2994A" }} key={category} label={category} size="small" />
                    ))}
                </Grid>
                <SubmitBody handleEditorChange={handleEditorChange} handleSubmit={handleSubmit} />
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ sessionState }) => ({
    isAuthenticated: sessionState.authenticated,
    user: sessionState.user,
})

const mapDispatchToProps = { createPost }

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPage)
