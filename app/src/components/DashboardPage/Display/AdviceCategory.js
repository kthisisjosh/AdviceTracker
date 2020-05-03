import React from "react"
import { Paper, Grid, Typography } from "@material-ui/core"
import AdviceSubCategory from "./AdviceSubCategory"

const AdviceCategory = (props) => {
    return (
        <Grid style={{ width: "100%", height: "auto", marginBottom: "2vh"}}>
            <Paper style={{ padding: "0.25vh 1vw 1vh 1vw" }}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h3" style={{ fontWeight: "bold" }}>
                            {props.title}
                        </Typography>
                    </Grid>

                    <Grid item style={{ marginTop: "-0.75vh" }}>
                        <Typography variant="caption">{props.description}</Typography>
                    </Grid>

                    <AdviceSubCategory title="Negotation" />
                    <AdviceSubCategory title="Productivity" />
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AdviceCategory
