import React from "react"
import { Paper, Typography } from "@material-ui/core"

const Advice = (props) => {
    return (
        <Paper style={{ padding: "0.5vh 0.5vw 0.5vh 0.5vw", marginTop: "0.75vh", marginBottom: "0.75vh", width: "auto" }}>
            <Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.content }} />
        </Paper>
    )
}

export default Advice
