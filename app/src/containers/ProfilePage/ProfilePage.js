import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"
import { Helmet } from "react-helmet"
import { getUserInfo } from "../../redux/actions/users"

const ProfilePage = (props) => {
    const { isAuthenticated, user, match, getUserInfo } = props
    const history = useHistory()

    useEffect(() => {
        getUserInfo(match.params.username)
    }, [])
    // href={"/user/"+user.username.replace(/ /g, "_") + "/"
    return (
        <Fragment>
            <Helmet>
                <title>Profile | AdviceTracker</title>
                <meta name="description" content="Profile - Find & save valuable advice on the way by browsing user submitted advice." />
                <link rel="canonical" />
            </Helmet>
            <Header />
            <Navbar />
            <Grid style={{ height: "1000px" }}>
                <Typography style={{ marginTop: "50px" }} align="center" variant="h2"></Typography>
            </Grid>
        </Fragment>
    )
}

const mapStateToProps = ({ authState }) => ({
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
})

const mapDispatchToProps = { getUserInfo }

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
