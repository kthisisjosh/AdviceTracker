import React from "react"
import Grid from "@material-ui/core/Grid"
import { Typography, Button } from "@material-ui/core"

const Hero = () => {
    return (
        <Grid container>
            <Grid item md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "center" }} direction="column">
                <Grid className="landing-hero" item direction="column" style={{ width: "35vw", margin: "150px auto", display: "inline-block" }}>
                    <Typography className="landing-hero-h2" variant="h2" align="left">
                        Keep all of your advice in one place
                    </Typography>
                    <Typography className="landing-hero-body" variant="body1" align="left" style={{ marginTop: "25px" }}>
                        It's hard keeping track of good advice - there are so much awesome advice out there. Fix that by tracking all the advice you
                        think may help you in the future.
                    </Typography>
                    <Grid item style={{ marginTop: "50px" }}>
                        <Button
                            className="landing-hero-btn"
                            variant="outlined"
                            style={{ width: "300px", height: "68px", backgroundColor: "#F2994A", color: "#FFFFFF" }}
                            href="/login"
                        >
                            <Typography variant="button">Register</Typography>
                        </Button>
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Button className="landing-hero-btn" variant="outlined" style={{ width: "300px", height: "68px", color: "#2D9CDB" }} href="/login">
                            <Typography variant="button">Login</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="landing-demo" item md={6} xs={12}>
                Test
            </Grid>
        </Grid>
    )
}

export default Hero
