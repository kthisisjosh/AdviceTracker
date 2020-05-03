import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox/Inbox"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"

import { getInboxAdvice, submitInboxAdvice, deleteInboxAdvice } from "../../redux/actions/advice"
import { useHistory } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import Display from "../../components/DashboardPage/Display/Display"

const DashboardPage = (props) => {
    const { getInboxAdvice, deleteInboxAdvice, inboxAdvice, submitInboxAdvice, isAuthenticated, user } = props
    const history = useHistory()
    const [toAdd, setToAdd] = useState(false)
    const [submitAdvice, setSubmitAdvice] = useState("")

    useEffect(() => {
        if (!inboxAdvice.length && isAuthenticated) {
            getInboxAdvice(user.userID)
        } else if (!isAuthenticated) {
            history.push("/login")
        }
    }, [getInboxAdvice, history, inboxAdvice.length, isAuthenticated])

    const handleAddClick = () => {
        setToAdd(true)
    }

    const handleSubmit = () => {
        submitInboxAdvice(submitAdvice, user.userID)
        setSubmitAdvice("")
        setToAdd(false)
    }

    const handleEditorChange = (content, editor) => {
        setSubmitAdvice(content)
    }

    const handleAddToCategory = (event) => {
        console.log("add")
        console.log(event)
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
                handleAddClick={handleAddClick}
                handleSubmit={handleSubmit}
                handleEditorChange={handleEditorChange}
                toAdd={toAdd}
            />

            {false && <Display />}

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
})

const mapDispatchToProps = { getInboxAdvice, submitInboxAdvice, deleteInboxAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
