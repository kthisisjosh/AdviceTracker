import React from "react"
import { Paper, Typography, Tooltip, IconButton, Grid } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"

const Advice = (props) => {
    return (
        <Paper style={{ padding: "0.5vh 0.5vw 0.5vh 0.5vw", marginTop: "0.75vh", marginBottom: "0.75vh", width: "auto" }}>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.content }} />
            {props.editIcons && (
                <Grid item>
                    <Tooltip title="Edit">
                        <IconButton onClick={props.handleAddToCategory} aria-label="Edit">
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <IconButton onClick={() => props.handleDelete(props.advice)} aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </Grid>
            )}
        </Paper>
    )
}

export default Advice
