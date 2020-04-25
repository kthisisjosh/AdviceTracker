import React, { Fragment, useEffect } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"

const SubmitPage = (props) => {
    const { isAuthenticated, user } = props
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/")
        }
    })

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Typography variant="h1">Coming soon!</Typography>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ authState }) => ({
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPage)
