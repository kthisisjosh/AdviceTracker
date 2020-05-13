import React from "react"
import Paper from "@material-ui/core/Paper"
import { Typography, Grid, Avatar, Chip, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

var moment = require("moment")

const Hit = ({ hit, user, handleDeleteClick }) => {
    let allowToDelete = false
    if (user !== undefined) {
        if (user.userID === hit.user_id) allowToDelete = true
    }

    return (
        <Paper style={{ marginBottom: "2vh", width: "auto" }} variant="outlined">
            <Grid container direction="column" style={{ padding: "0.5vh 0.5vw" }}>
                <Grid container direction="row" style={{ margin: "auto" }}>
                    <Grid item>
                        <a href={"/user/" + hit.user_name.replace(/ /g, "_")}>
                            <Avatar alt={hit.user_name} src={hit.user_image_url}>
                                {hit.user_name.charAt(0)}
                            </Avatar>
                        </a>
                    </Grid>
                    <Grid item style={{ paddingTop: "1vh", marginLeft: "0.5vw", marginRight: "0.25vw" }}>
                        <a href={"/user/" + hit.user_name.replace(/ /g, "_")}>
                            <Typography variant="body1">{hit.user_name}</Typography>
                        </a>
                    </Grid>
                    <Grid item style={{ paddingTop: "1vh", marginLeft: "0.5vw" }}>
                        <Grid container direction="row">
                            {hit.category.map((category) => (
                                <Chip style={{ marginRight: "0.5vw", backgroundColor: "#F2994A" }} key={category} label={category} size="small" />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item style={{ paddingTop: "1.2vh", marginLeft: "0.5vw" }}>
                        <Typography variant="body2" style={{ color: "grey" }}>
                            {moment(hit.post_date).fromNow()}
                        </Typography>
                    </Grid>
                    {allowToDelete ? (
                        <Grid item style={{ marginLeft: "auto" }}>
                            <IconButton>
                                <DeleteIcon onClick={() => handleDeleteClick(hit.objectID)} />
                            </IconButton>
                        </Grid>
                    ) : null}
                </Grid>
                <a style={{ textDecoration: "none" }} href={hit.permalink}>
                    <Grid item>
                        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: hit.content }} />
                    </Grid>
                </a>
            </Grid>
        </Paper>
    )
}

export default Hit
