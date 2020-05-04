import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox/Inbox"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { getInboxAdvice, getAdvice, submitInboxAdvice, deleteInboxAdvice, submitCategory } from "../../redux/actions/advice"
import { useHistory } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import Display from "../../components/DashboardPage/Display/Display"

const DashboardPage = (props) => {
    const { getInboxAdvice, getAdvice, deleteInboxAdvice, inboxAdvice, submitCategory, submitInboxAdvice, isAuthenticated, user, categories } = props
    const history = useHistory()
    const [toAddInbox, setToAddInbox] = useState(false)
    const [toAddCategory, setToAddCategory] = useState(false)
    const [submitCategoryInfo, setSubmitCategory] = useState({ title: "", description: "" })
    const [submitAdvice, setSubmitAdvice] = useState("")

    useEffect(() => {
        if (!inboxAdvice.length && isAuthenticated) {
            getInboxAdvice(user.userID)
            getAdvice(user.userID)
        } else if (!isAuthenticated) {
            //history.push("/login")
        }
    }, [getInboxAdvice, history, inboxAdvice.length, isAuthenticated])

    // --------- Category --------- \\
    const handleAddClickCategory = () => {
        setToAddCategory(true)
    }

    const handleSubmitCategory = () => {
        submitCategory(submitCategoryInfo, user.userID)
        setSubmitCategory({ title: "", description: "" })
        setToAddCategory(false)
    }

    const handleCategoryChange = (e) => {
        if (e.target.name === "title") {
            setSubmitCategory({ title: e.target.value, description: submitCategoryInfo.description })
        } else {
            setSubmitCategory({ title: submitCategoryInfo.title, description: e.target.value })
        }
    }

    const handleAddClickInbox = () => {
        setToAddInbox(true)
    }

    const handleSubmitInbox = () => {
        submitInboxAdvice(submitAdvice, user.userID)
        setSubmitAdvice("")
        setToAddInbox(false)
    }

    const handleEditorChange = (content, editor) => {
        setSubmitAdvice(content)
    }

    const handleAddToCategory = (event) => {
        console.log(categories)
    }

    const handleDelete = (advice) => {
        deleteInboxAdvice(advice)
    }

    return (
        <Fragment>
            <Helmet>
                <title>Dashboard | AdviceTracker</title>
                <meta
                    name="description"
                    content="Sort & organize your advice by categories, sub-categories, and genre. Format it however you'd like! Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href="https://advicetracker.life/dashboard" />
            </Helmet>
            <Header />
            <Navbar />
            <Inbox
                inbox={inboxAdvice}
                handleAddToCategory={handleAddToCategory}
                handleDelete={handleDelete}
                handleAddClick={handleAddClickInbox}
                handleSubmit={handleSubmitInbox}
                handleEditorChange={handleEditorChange}
                toAdd={toAddInbox}
            />

            {true && (
                <Display
                    handleAddClick={handleAddClickCategory}
                    handleSubmit={handleSubmitCategory}
                    handleChange={handleCategoryChange}
                    toAdd={toAddCategory}
                    categories={categories}
                />
            )}

            <Grid style={{ height: "500px" }}>
                <Typography style={{ marginTop: "200px" }} align="center" variant="h2"></Typography>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, authState }) => ({
    inboxAdvice: adviceState.inboxAdvice,
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    categories: adviceState.categories,
})

const mapDispatchToProps = { getAdvice, getInboxAdvice, submitInboxAdvice, deleteInboxAdvice, submitCategory }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
