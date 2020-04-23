import React from "react"
import { Grid, Typography } from "@material-ui/core"

const BodyB = () => {
    return (
        <Grid container>
            <Grid item md={6} xs={12}>
                <img alt="demo"style={{ height: "500px", width: "450px", margin: "0px 5vw 100px 20vw" }} src="./login-sample.JPG"></img>
            </Grid>

            <Grid item md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "center" }}>
                <Grid item style={{ width: "35vw", margin: "0 auto", marginRight: "15vw", display: "inline-block" }}>
                    <Typography variant="h4" align="right">
                        Discover awesome advice on the way
                    </Typography>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography variant="h6" align="right" style={{ marginBottom: "15px" }}>
                            Submit your own advice for others to enjoy
                        </Typography>
                        <Typography variant="body2" align="right">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography variant="h6" align="right" style={{ marginBottom: "15px" }}>
                            Save useful advice to your own dashboard
                        </Typography>
                        <Typography variant="body2" align="right">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BodyB
