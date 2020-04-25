import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox"
import { connect } from "react-redux"

import { getInboxAdvice, submitInboxAdvice } from "../../redux/actions/advice"
import { useHistory } from "react-router-dom"

const DashboardPage = (props) => {
    const { getInboxAdvice, inboxAdvice, submitInboxAdvice, isAuthenticated, user } = props
    const history = useHistory()
    const [toAdd, setToAdd] = useState(false)
    const [submitAdvice, setSubmitAdvice] = useState("")

    useEffect(() => {
        if (!inboxAdvice.length && isAuthenticated) {
            getInboxAdvice(user.id)
        } else if (!isAuthenticated) {
            history.push("/")
        }
    }, [getInboxAdvice, inboxAdvice, isAuthenticated])

    const handleAddClick = () => {
        setToAdd(true)
    }

    const handleSubmit = () => {
        submitInboxAdvice(submitAdvice, user.id)
        setToAdd(false)
    }

    const handleEditorChange = (content, editor) => {
        setSubmitAdvice(content)
    }

    return (
        <Fragment>
            <Header />
            <Navbar />
            {isAuthenticated && (
                <Inbox
                    inbox={inboxAdvice}
                    handleAddClick={handleAddClick}
                    handleSubmit={handleSubmit}
                    handleEditorChange={handleEditorChange}
                    toAdd={toAdd}
                />
            )}
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, authState }) => ({
    inboxAdvice: adviceState.inboxAdvice,
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
})

const mapDispatchToProps = { getInboxAdvice, submitInboxAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
