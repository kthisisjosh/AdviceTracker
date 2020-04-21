import React from "react"
import Typography from "@material-ui/core/Typography"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Footer from "../../components/Footer/Footer"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const LoginPage = (props) => {
    return (
        <>
            <LandingHeader />
            <section>
                <Grid container>
                    <Grid item xl={5} md={5} xs={1} style={{ height: "700px", backgroundColor: "#EDEDED" }}>
                        <image href="login-sample.JPG" style={{ height: "500px", width: "500px" }} />
                    </Grid>
                    <Grid item xl={7} md={7} xs={12} style={{ height: "700px", backgroundColor: "#FCFCFC" }}>
                        <Paper style={{ margin: "70px 350px 50px 150px", position: "absolute", width: "460px", height: "500px" }}>
                            <div style={{ width: "460px, height: 200px", backgroundColor: "#FFFFFF" }}>
                                <Button style={{ marginTop: "50px" }}>Registration</Button>
                                <Button style={{ marginTop: "50px" }}>Sign-in</Button>
                            </div>
                            <div style={{ position: "relative", width: "460px", height: "50px", backgroundColor: "#FAFAFA" }}>
                                <Typography style={{ paddingLeft: "8px", paddingTop: "12.5px" }}>You can sign in with social</Typography>
                                <svg style={{ width: "7vw", height: "4vw", marginLeft: "400px" }}>
                                    <image href="google.svg" />
                                </svg>
                            </div>
                            <div style={{ position: "relative", width: "460px", height: "340px", backgroundColor: "#FEFEFE" }}>
                                <Grid container direction="column" style={{ padding: "40px" }}>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <Button style={{ width: "380px", height: "50px", backgroundColor: "#F2994A", color: "#FFFFFF" }} href="/login">
                                        Register
                                    </Button>
                                </Grid>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </section>
            <Footer />
        </>
    )
}

export default LoginPage
