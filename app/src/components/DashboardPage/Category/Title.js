import React from "react"
import { Grid, Typography } from "@material-ui/core"

const Title = (props) => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                    {props.category.name}
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1">{props.category.description}</Typography>
            </Grid>
        </Grid>
    )
}

export default Title
