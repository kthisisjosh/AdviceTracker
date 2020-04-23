import React, { Fragment } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography } from "@material-ui/core"

const SubmitPage = () => {
    return (
        <Fragment>
            <Header />
            <Navbar />
            <Typography variant="h1">Coming soon!</Typography>
            <Footer />
        </Fragment>
    )
}

export default SubmitPage
