import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core"
import Advice from "./Advice"
import { useHistory } from "react-router-dom"

const AdviceSubCategory = (props) => {
    const history = useHistory()
    let isTwo = false

    if (props.advice.length > 1) {
        isTwo = true
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
                        {isTwo && (
                            <>
                                <Advice content={props.advice[0].content} key={props.advice[0].adviceID} />
                                <Advice content={props.advice[1].content} key={props.advice[1].adviceID} />
                            </>
                        )}
                        {!isTwo && <Advice content={props.advice[0].content} key={props.advice[0].adviceID} />}
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
