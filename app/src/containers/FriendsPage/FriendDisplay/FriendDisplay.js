import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { deleteUser } from "../../../redux/actions/users"
import { connect } from "react-redux"

const FriendDisplay = (props) => {
    const {deleteUser} = props
    
    const handleDelete = () => {
        deleteUser(props.person.id)
    }

    return (
        <div>
            <Paper elevation={3} variant="outlined" style={{ margin: "auto", width: "30vw", height: "auto", marginBottom: "1vh" }}>
                <h4 style={{ margin: "2px 2px 2px 2px" }}>
                    <Typography variant="button">{props.person.username}</Typography>
                </h4>
                <p style={{ margin: "2px 2px 2px 2px" }}>{props.person.userID}</p>
                <Button onClick={handleDelete}>Delete</Button>
            </Paper>
        </div>
    )
}

const mapStateToProps = () => {}

const mapDispatchToProps = { deleteUser }

export default connect(mapStateToProps, mapDispatchToProps)(FriendDisplay)
