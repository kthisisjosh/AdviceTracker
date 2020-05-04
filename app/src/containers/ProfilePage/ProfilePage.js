import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import { Helmet } from "react-helmet"

const ProfilePage = (props) => {
    const { isAuthenticated, user } = props
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/login")
        }
    }, [isAuthenticated, history])

    return (
        <Fragment>
            <Helmet>
                <title>Profile | AdviceTracker</title>
                <meta name="description" content="Profile - Find & save valuable advice on the way by browsing user submitted advice." />
                <link rel="canonical" href="https://advicetracker.life/profile" />
            </Helmet>
            <Header />
            <Navbar />
            <Grid style={{ height: "1000px" }}>
                <Typography style={{ marginTop: "50px" }} align="center" variant="h2">
                    Welcome, {user.username}
                </Typography>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = ({ authState }) => ({
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
})

export default connect(mapStateToProps)(ProfilePage)
