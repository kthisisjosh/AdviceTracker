import React from "react"
import { Grid, Typography, Grow } from "@material-ui/core"

const BodyB = () => {
    return (
        <Grid container style={{ marginTop: "5vh", marginBottom: "10vh" }}>
            <Grid className="landing-bodyb-demo" item md={6} xs={12} style={{ textAlign: "center" }}>
                <Grow in={true} timeout={1750}>
                    <img
                        alt="demo"
                        style={{ height: "450px", width: "550px", margin: "auto", marginLeft: "2vw", borderRadius: "15px" }}
                        src="./login-sample3.png"
                    />
                </Grow>
            </Grid>

            <Grid item className="landing-bodyb" md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "center" }}>
                <Grid item className="landing-bodyb" style={{ width: "35vw", margin: "auto", marginRight: "10vw", display: "inline-block" }}>
                    <Typography className="landing-bodyb-h4" variant="h4" align="right">
                        Discover awesome advice on the way
                    </Typography>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography className="landing-bodyb-h6" variant="h6" align="right" style={{ marginBottom: "15px" }}>
                            Submit your own advice for others to enjoy
                        </Typography>
                        <Typography className="landing-bodyb-body2" variant="body2" align="right">
                            If you're feeling generous, share your advice with others! Submit it under a specific category to reach the people who
                            will benefit the most - teenagers looking for ways to maximize their youth, adults who are looking to find purpose, and more.
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography className="landing-bodyb-h6" variant="h6" align="right" style={{ marginBottom: "15px" }}>
                            Save useful advice to your own dashboard
                        </Typography>
                        <Typography className="landing-bodyb-body2" variant="body2" align="right">
                            If you find a user-submitted advice helpful, add them to your own dashboard.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default BodyB
