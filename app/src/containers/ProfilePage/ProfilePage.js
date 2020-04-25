import React, { Fragment, useEffect } from "react"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"

const ProfilePage = (props) => {
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
            {isAuthenticated && <h2 style={{ textAlign: "center" }}>Welcome, {user.username}</h2>}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated,
    user: state.authState.user,
})

export default connect(mapStateToProps)(ProfilePage)
