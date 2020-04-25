import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const FriendDisplay = (props) => {
    return (
        <div>
            <Paper elevation={3} variant="outlined" style={{ margin: "auto", width: "15vw", height: "auto", marginBottom: "1vh" }}>
                <h4 style={{ margin: "2px 2px 2px 2px" }}>
                    <Typography variant="button">{props.person.username}</Typography>
                </h4>
                <p style={{ margin: "2px 2px 2px 2px" }}>{props.person.userID}</p>
            </Paper>
        </div>
    )
}

export default FriendDisplay
