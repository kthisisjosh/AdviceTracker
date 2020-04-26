import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { Grid, Typography } from "@material-ui/core"

const ProfilePage = (props) => {
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
            {isAuthenticated && (
                <Grid style={{ height: "1000px" }}>
                    <Typography style={{ marginTop: "50px" }} align="center" variant="h2">
                        Welcome, {props.user.username}
                    </Typography>
                </Grid>
            )}
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.authState.isAuthenticated,
    user: state.authState.user,
})

export default connect(mapStateToProps)(ProfilePage)
