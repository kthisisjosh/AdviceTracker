import React, { useEffect, Fragment } from "react"
import { connect } from "react-redux"
import { getUsers, createUser } from "../../redux/actions/users"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid, Typography } from "@material-ui/core"
import { Helmet } from "react-helmet"

const FriendsPage = (props) => {
    const { users, getUsers, isAuthenticated } = props

    useEffect(() => {
        if (!users.length) getUsers()
    }, [getUsers, users])

    return (
        <Fragment>
            <Helmet>
                <title>Browse | AdviceTracker</title>
                <meta
                    name="description"
                    content="Sort & organize your advice by categories, sub-categories, and genre. Format it however you'd like! Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href="https://advicetracker.life/browse" />
            </Helmet>
            <Header />
            {isAuthenticated && <Navbar />}
            <Grid style={{ height: "1000px" }}>
                <Typography style={{ marginTop: "200px" }} align="center" variant="h2">
                    Coming soon!
                </Typography>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ userState, authState }) => ({
    users: userState.users,
    isAuthenticated: authState.isAuthenticated,
})

const mapDispatchToProps = { getUsers, createUser }

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
