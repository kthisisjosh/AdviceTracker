import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import Advice from "./Advice"

const AdviceSubCategory = (props) => {
    return (
        <Grid item style={{ marginTop: "1vh" }}>
            <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw" }}>
                <Grid container direction="column">
                    <Grid item style={{ marginBottom: "0.5vh", marginTop: "-0.5vh" }}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5vh" }}>
                        {props.advice.map(advice => <Advice content={advice.content} key={advice.adviceID}/>)}
                    </Grid>
                    <Grid item style={{ marginTop: "-0.75vh", marginBottom: "-0.5vh"}}>
                        <Typography variant="button" style={{color: "#0047FF" }}>
                            Show More
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AdviceSubCategory
