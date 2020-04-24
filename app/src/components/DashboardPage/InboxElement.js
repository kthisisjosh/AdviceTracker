import React from "react"
import { Grid, Paper, Typography, IconButton, Tooltip } from "@material-ui/core"
import Scroll from "react-scroll"
import DeleteIcon from "@material-ui/icons/Delete"
import LibraryAddIcon from "@material-ui/icons/LibraryAdd"

var Element = Scroll.Element

const InboxElement = (props) => {
    return (
        <Element style={{ margin: "2vh" }}>
            <Paper style={{ width: "100%" }}>
                <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "1.5vh" }}>
                    <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur lobortis ex a vulputate. Duis tempor purus in nisl
                        tempor dignissim vitae eget lectus. Proin dignissim aliquet felis, placerat aliquam tellus ultrices in. Etiam condimentum
                        fringilla urna, vel commodo metus cursus vel. Donec nulla justo, consequat ut pretium vitae, mattis ut.
                    </Typography>
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
