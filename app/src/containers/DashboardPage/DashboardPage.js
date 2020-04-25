import React, { Fragment, useEffect, useState } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox"
import { connect } from "react-redux"

import { getInboxAdvice, submitInboxAdvice } from "../../redux/actions/advice"

const DashboardPage = (props) => {
    const { getInboxAdvice, inboxAdvice, submitInboxAdvice, isAuthenticated } = props
    const [toAdd, setToAdd] = useState(false)
    const [submitAdvice, setSubmitAdvice] = useState("")

    useEffect(() => {
        if (!inboxAdvice.length) getInboxAdvice()
    }, [getInboxAdvice, inboxAdvice])

    const handleAddClick = () => {
        setToAdd(true)
    }

    const handleSubmit = () => {
        submitInboxAdvice(submitAdvice)
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
})

const mapDispatchToProps = { getInboxAdvice, submitInboxAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
