import React, { useEffect, Fragment } from "react"
import { connect } from "react-redux"
import { getUsers, createUser } from "../../redux/actions/users"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { Helmet } from "react-helmet"
import BrowseSearchUI from "../../components/BrowseSearchUI/BrowseSearchUI"

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
            <BrowseSearchUI />
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
