import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox"
import { connect } from "react-redux"

import { getInboxAdvice, submitInboxAdvice, deleteInboxAdvice} from "../../redux/actions/advice"
import { useHistory } from "react-router-dom"

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
    }, [getInboxAdvice, history, inboxAdvice.length, isAuthenticated, user.userID])

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
            <Header />
            <Navbar />
            {isAuthenticated && (
                <Inbox
                    inbox={inboxAdvice}
                    handleAddToCategory={handleAddToCategory}
                    handleDelete={handleDelete}
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

const mapDispatchToProps = { getInboxAdvice, submitInboxAdvice, deleteInboxAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
