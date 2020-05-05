import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import Advice from "./Advice"

const AdviceSubCategory = (props) => {
    let isTwo = false
    let isNone = false;

    if (props.advice.length > 1) {
        isTwo = true
    }
    if (props.advice.length === 0) {
        isNone = true;
    }

    return (
        <Grid item style={{ marginTop: "1vh", width: "auto" }}>
            <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw", width: "auto" }}>
                <Grid container direction="column">
                    <Grid item style={{ marginBottom: "0.5vh", marginTop: "-0.5vh" }}>
                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5vh" }}>
                        {(isTwo && !isNone) && (
                            <>
                                <Advice content={props.advice[0].content} key={props.advice[0].adviceID} />
                                <Advice content={props.advice[1].content} key={props.advice[1].adviceID} />
                            </>
                        )}
                        {(!isTwo && !isNone) && <Advice content={props.advice[0].content} key={props.advice[0].adviceID} />}
                        {isNone && <Advice content="There is currently no advice here, add some!" key="123"/>}
                    </Grid>
                    <Grid item style={{ marginTop: "-0.75vh", marginBottom: "-0.5vh" }}>
                        <Typography variant="button" style={{ color: "#0047FF" }}>
                            Show More
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AdviceSubCategory
