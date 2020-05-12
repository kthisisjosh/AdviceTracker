import React from "react"
import Grid from "@material-ui/core/Grid"
import { Typography } from "@material-ui/core"
import RegisterButton from "./RegisterButton"
import LoginButton from "./LoginButton"
import { motion } from "framer-motion"

const Hero = () => {
    return (
        <Grid container>
            <Grid className="landing-hero-wrap" item md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "left" }}>
                <Grid className="landing-hero" item style={{ width: "35vw", margin: "150px auto", marginLeft: "14vw", display: "inline-block" }}>
                    <Typography className="landing-hero-h2" variant="h2" align="left" style={{ fontWeight: "bold" }}>
                        Keep all of your advice in one place
                    </Typography>
                    <Typography className="landing-hero-body" variant="body1" align="left" style={{ marginTop: "25px" }}>
                        It's hard keeping track of good advice - there are so much awesome advice out there. Fix that by tracking all the advice you
                        think may help you in the future.
                    </Typography>
                    <Grid item style={{ marginTop: "50px" }}>
                        <RegisterButton />
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <LoginButton />
                    </Grid>
                </Grid>
            </Grid>

            <Grid className="landing-demo" item md={6} xs={12} style={{ textAlign: "center", margin: "auto" }}>
                <motion.img
                    initial={{ scale: 0.25, opacity: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: { duration: 0.75 },
                    }}
                    alt="demo"
                    style={{ height: "500px", width: "450px", margin: "100px 100px 100px 100px", borderRadius: "15px" }}
                    src="./login-sample.JPG"
                />
            </Grid>
        </Grid>
    )
}

export default Hero
