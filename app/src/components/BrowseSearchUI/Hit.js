import React from "react"
import Paper from "@material-ui/core/Paper"

const Hit = (props) => {
    return (
        <Paper style={{ width: "auto" }}>
            <div>{props.hit.content_stripped}</div>
            <div>By: {props.hit.user_name}</div>
        </Paper>
    )
}

export default Hit
