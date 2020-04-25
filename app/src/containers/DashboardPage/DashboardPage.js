import React, { Fragment, useEffect } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox"
import { connect } from "react-redux"

import { getInboxAdvice } from "../../redux/actions/advice"

const DashboardPage = (props) => {
    const { getInboxAdvice, inboxAdvice } = props

    useEffect(() => {
        if (!inboxAdvice.length) getInboxAdvice()
    }, [getInboxAdvice, inboxAdvice])

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Inbox inbox={inboxAdvice} />
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState }) => ({
    inboxAdvice: adviceState.inboxAdvice,
})

const mapDispatchToProps = { getInboxAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
