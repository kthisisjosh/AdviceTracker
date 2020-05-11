import React from "react"
import { Grid, Avatar, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const UserInfo = (props) => {
    return (
        <Grid container direction="row" style={{ marginTop: "2.5vh" }}>
            <Grid item>
                <Link to={"/user/" + props.user.username.replace(/ /g, "_") + "/"}>
                    <Avatar alt={props.user.username} src={props.user.profileUrl}>
                        {props.user.username.charAt(0)}
                    </Avatar>
                </Link>
            </Grid>
            <Grid item style={{ marginTop: "0.5vh", marginLeft: "0.75vw" }}>
                <Link to={"/user/" + props.user.username.replace(/ /g, "_") + "/"} style={{ textDecoration: "none", color: "white" }}>
                    <Typography variant="body1">{props.user.username}</Typography>
                </Link>
            </Grid>
        </Grid>
    )
}

export default UserInfo
