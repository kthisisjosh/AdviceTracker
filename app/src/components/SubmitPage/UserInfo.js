import React from "react"
import { Grid, Avatar, Typography } from "@material-ui/core"

const UserInfo = (props) => {
    return (
        <Grid container direction="row" style={{ marginTop: "2.5vh" }}>
            <Grid item>
                <Avatar alt={props.user.username} src={props.user.profileUrl}>
                    {props.user.username.charAt(0)}
                </Avatar>
            </Grid>
            <Grid item style={{ marginTop: "0.5vh", marginLeft: "0.75vw" }}>
                <Typography variant="body1">{props.user.username}</Typography>
            </Grid>
        </Grid>
    )
}

export default UserInfo
