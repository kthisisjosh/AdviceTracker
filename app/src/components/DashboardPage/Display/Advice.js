import React from "react"
import { Paper, Typography } from "@material-ui/core"

const Advice = (props) => {
    return (
        <Paper style={{ padding: "0.5vh 0.5vw 0.5vh 0.5vw", marginBottom: "1.5vh", width: "auto" }}>
            <Typography variant="body1" dangerouslySetInnerHTML={{__html: props.content}} />
        </Paper>
    )
}

export default Advice