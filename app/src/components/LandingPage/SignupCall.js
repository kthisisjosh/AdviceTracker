import React from "react"
import { Grid, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import LoginButton from "./LoginButton"
import RegisterButton from "./RegisterButton"

export const SignupCall = () => {
    return (
        <Grid container direction="row" style={{backgroundColor: "#F5F5F5"}}>
            <Grid item md={6} xs={12} style={{textAlign: "center", margin: "75px auto"}}>
                <Typography variant="h4">Track your advice today.</Typography>
            </Grid>

            <Grid item className="signupcall-btn" md={6} xs={12} style={{textAlign: "left", marginBottom: "20px"}}>
                <Grid item justify="left" style={{ marginTop: "25px" }}>
                    <RegisterButton />
                </Grid>
                <Grid item style={{ marginTop: "25px" }}>
                    <LoginButton />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignupCall
