import React from "react"
import { Grid } from "@material-ui/core"
import NewAdvice from "../DashboardPage/Category/NewAdvice"

const SubmitBody = (props) => {
    return (
        <Grid container direction="column">
            <Grid item style={{ marginTop: "2.5vh" }}>
                <NewAdvice height="50vh" editorHeight="43vh" handleEditorChange={props.handleEditorChange} handleSubmit={props.handleSubmit} />
            </Grid>
        </Grid>
    )
}

export default SubmitBody
