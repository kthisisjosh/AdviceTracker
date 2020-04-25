import React, { Fragment } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"

const ProfilePage = (props) => {
    const { isAuthenticated, user } = props

    return (
        <Fragment>
            <Header />
            <Navbar />
            {isAuthenticated && <h2 style={{ textAlign: "center" }}>Welcome, {user.username}</h2>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated,
    user: state.authState.user,
})

export default connect(mapStateToProps)(ProfilePage)
