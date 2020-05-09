import React from "react"
import { Grid, Paper, Button, Tooltip } from "@material-ui/core"
import Scroll from "react-scroll"
import AddIcon from "@material-ui/icons/Add"
import TinyMCEEditor from "./TinyMCEEditor"

var Element = Scroll.Element

const AddElement = (props) => {
    return (
        <Element style={{ margin: "2vh" }}>
            <Paper style={{ width: "100%" }}>
                <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "0.75vh" }}>
                    <TinyMCEEditor height={150} initialValue="<p>Add your advice here!</p>" handleEditorChange={props.handleEditorChange} />
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
        </Element>
    )
}

export default AddElement
