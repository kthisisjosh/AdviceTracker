import React, { Fragment } from "react"
import { connect } from "react-redux"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Helmet } from "react-helmet"
import BrowseSearchUI from "./BrowseSearchUI"

const FriendsPage = (props) => {
    const { isAuthenticated, user } = props

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
            <BrowseSearchUI location={props.location} user={user} />
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ sessionState }) => ({
    user: sessionState.user,
    isAuthenticated: sessionState.authenticated,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
