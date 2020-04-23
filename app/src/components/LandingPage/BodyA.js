import React from "react"
import { Grid, Typography } from "@material-ui/core"

const BodyA = () => {
    return (
        <Grid container>
            <Grid item md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "center" }}>
                <Grid item style={{ width: "35vw", margin: "0 auto", marginLeft: "15vw", display: "inline-block" }}>
                    <Typography variant="h4" align="left">
                        Never forget the crucial advice you are given
                    </Typography>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography variant="h6" align="left" style={{ marginBottom: "15px" }}>
                            Sort advice by how you want it
                        </Typography>
                        <Typography variant="body2" align="left">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography variant="h6" align="left" style={{ marginBottom: "15px" }}>
                            Sort advice by how you want it
                        </Typography>
                        <Typography variant="body2" align="left">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                            ratione voluptatem sequi nesciunt. Neque porro quisquam est.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={6} xs={12} >
                <img alt="demo" style={{ height: "500px", width: "450px", margin: "0px 10vw 100px 10vw" }} src="./login-sample.JPG"></img>
            </Grid>
        </Grid>
    )
}

export default BodyA
