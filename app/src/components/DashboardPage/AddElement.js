import React from "react"
import { Editor } from "@tinymce/tinymce-react"
import { Grid, Paper, Button, Tooltip } from "@material-ui/core"
import Scroll from "react-scroll"
import AddIcon from "@material-ui/icons/Add"

var Element = Scroll.Element

const AddElement = (props) => {
    return (
        <Element style={{ margin: "2vh" }}>
            <Paper style={{ width: "100%" }}>
                <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "0.75vh" }}>
                    <Editor
                        apiKey={process.env.REACT_APP_TINY_API_KEY}
                        initialValue="<p>Add your advice here!</p>"
                        init={{
                            height: 150,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
                        }}
                        onEditorChange={props.handleEditorChange}
                    />
                </Grid>
                <Grid item style={{ marginBottom: "1vh", marginLeft: "1.5vw", paddingTop: "1vh", paddingBottom: "1vh" }}>
                    <Tooltip title="Add to Inbox">
                        <Button
                            size="small"
                            variant="contained"
                            onClick={props.handleAddClick}
                            style={{ backgroundColor: "F2994A" }}
                            startIcon={<AddIcon />}
                        >
                            Add
                        </Button>
                    </Tooltip>
                </Grid>
            </Paper>
            <Grid item></Grid>
        </Element>
    )
}

export default AddElement
