import React from "react"
import { Grid, Paper, Typography, IconButton, Tooltip } from "@material-ui/core"
import Scroll from "react-scroll"
import DeleteIcon from "@material-ui/icons/Delete"
import LibraryAddIcon from "@material-ui/icons/LibraryAdd"

var Element = Scroll.Element

const InboxElement = (props) => {
    return (
        <Element style={{ margin: "2vh", height: "auto" }}>
            <Paper style={{ width: "100%" }}>
                <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "1.5vh" }}>
                    <Typography variant="body1" dangerouslySetInnerHTML={{__html: props.advice.content}} />
                </Grid>
                <Grid item style={{ marginBottom: "1vh", marginLeft: "1vw" }}>
                    <Tooltip title="Add to category">
                        <IconButton onClick={props.handleAdd} aria-label="add to category">
                            <LibraryAddIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton onClick={props.handleDelete} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            </Paper>
            <Grid item></Grid>
        </Element>
    )
}

export default InboxElement
