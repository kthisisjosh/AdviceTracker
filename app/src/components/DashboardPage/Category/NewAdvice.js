import React from "react"
import { Paper, Grid, Button, Tooltip } from "@material-ui/core"
import TinyMCEEditor from "../Inbox/TinyMCEEditor"
import AddIcon from "@material-ui/icons/Add"

const NewAdvice = (props) => {
    return (
        <Paper style={{ width: "100%" }}>
            <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "0.75vh" }}>
                <TinyMCEEditor handleEditorChange={props.handleEditorChange} />
            </Grid>
            <Grid item style={{ marginBottom: "1vh", marginLeft: "1.5vw", paddingTop: "1vh", paddingBottom: "1vh" }}>
                <Tooltip title="Add to Inbox">
                    <Button
                        size="small"
                        variant="contained"
                        onClick={props.handleSubmit}
                        type="submit"
                        style={{ backgroundColor: "F2994A" }}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </Tooltip>
            </Grid>
        </Paper>
    )
}

export default NewAdvice
