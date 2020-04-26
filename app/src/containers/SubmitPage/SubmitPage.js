import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"

const SubmitPage = (props) => {
    const { isAuthenticated, user } = props
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/login")
        }
    })

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid style={{ height: "1000px" }}>
                <Typography style={{ marginTop: "200px" }} align="center" variant="h2">
                    Coming soon!
                </Typography>
            </Grid>
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
