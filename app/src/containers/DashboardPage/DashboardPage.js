import React, { Fragment } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox"

const DashboardPage = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <Inbox />
            <Footer />
        </Fragment>
    )
}

export default DashboardPage
