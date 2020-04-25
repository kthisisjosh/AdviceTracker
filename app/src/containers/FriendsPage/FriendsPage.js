import React, { useEffect, Fragment, useState } from "react"
import { connect } from "react-redux"
import { getUsers, createUser } from "../../redux/actions/users"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Input from "@material-ui/core/Input"
import FriendDisplay from "./FriendDisplay/FriendDisplay"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import { v4 as uuidv4 } from "uuid"
import Footer from "../../components/Footer/Footer"

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
            <Grid container direction="column" justify="center" style={{ margin: "1vw", textAlign: "center", width: "98vw" }}>
                <Typography variant="h3">Users</Typography>

                {toAdd && (
                    <Paper style={{ width: "30vw", margin: "auto" }}>
                        <form autoComplete="off" onSubmit={handleSubmit}>
                            <Input fullWidth required placeholder="name" type="text" disableUnderline name="name" />
                            <Input fullWidth required placeholder="hobbies" type="text" disableUnderline name="hobbies" />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Paper>
                )}

                {users.map((person) => (
                    <FriendDisplay key={person.userID} person={person} />
                ))}
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
