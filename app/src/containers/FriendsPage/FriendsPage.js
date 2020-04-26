import React, { useEffect, Fragment, useState } from "react"
import { connect } from "react-redux"
import { getUsers, createUser } from "../../redux/actions/users"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { v4 as uuidv4 } from "uuid"
import Footer from "../../components/Footer/Footer"
import { Grid, Typography } from "@material-ui/core"

const FriendsPage = (props) => {
    const { users, getUsers, createUser } = props
    const [toAdd, setToAdd] = useState(false)

    useEffect(() => {
        if (!users.length) getUsers()
    }, [getUsers, users])

    const handleSubmit = (event) => {
        event.preventDefault()
        createUser({ name: event.target.name.value, hobbies: event.target.hobbies.value, id: uuidv4() })
        setToAdd(false)
    }

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

const mapStateToProps = ({ userState }) => ({
    users: userState.users,
})

const mapDispatchToProps = { getUsers, createUser }

export default connect(mapStateToProps, mapDispatchToProps)(FriendsPage)
