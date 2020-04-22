import React from "react"
import Typography from "@material-ui/core/Typography"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import GoogleLogin from "react-google-login"
import GithubLogin from "react-github-login"
import Button from "@material-ui/core/Button"
import Footer from "../../components/Footer/Footer"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const LoginPage = (props) => {

    const googleLogin = (response) => {
        console.log(response)
    }

    const githubLogin = (response) => {
        console.log(response);
        
    }

    return (
        <>
            <LandingHeader />
            <section>
                <Grid container>
                    <Grid item xl={5} md={5} xs={1} style={{ height: "700px", backgroundColor: "#EDEDED" }}>
                        <image href="login-sample.JPG" style={{ height: "500px", width: "500px" }} />
                    </Grid>
                    <Grid item xl={7} md={7} xs={12} style={{ height: "700px", backgroundColor: "#FCFCFC" }}>
                        <Paper elevation={3} style={{ margin: "70px 350px 50px 150px", position: "absolute", width: "460px", height: "500px" }}>
                            <div style={{ width: "460px, height: 200px", backgroundColor: "#FFFFFF" }}>
                                <Button style={{ marginTop: "50px" }}>Registration</Button>
                                <Button style={{ marginTop: "50px" }}>Sign-in</Button>
                            </div>
                            <div style={{ position: "relative", width: "460px", height: "50px", backgroundColor: "#FAFAFA" }}>
                                <Typography style={{ paddingLeft: "8px", paddingTop: "12.5px" }}>You can sign in with social</Typography>
                                <div>
                                    <GoogleLogin
                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                        onSuccess={googleLogin}
                                        onFailure={googleLogin}
                                        cookiePolicy={"single_host_origin"}
                                    />
                                </div>
                                <div>
                                    <GithubLogin
                                        clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                                        buttonText="Sign in using Github"
                                        onSuccess={githubLogin}
                                        onFailure={githubLogin}
                                    />
                                </div>
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

/**
 * <div style={{ position: "relative", width: "460px", height: "340px", backgroundColor: "#FEFEFE" }}>
                                <Grid container direction="column" style={{ padding: "40px" }}>
                                    <TextField id="outlined-basic" label="Username" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <TextField id="outlined-basic" label="Email" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <TextField id="outlined-basic" label="Password" variant="outlined" style={{ marginBottom: "15px" }} />
                                    <Button style={{ width: "380px", height: "50px", backgroundColor: "#F2994A", color: "#FFFFFF" }} href="/login">
                                        Register
                                    </Button>
                                </Grid>
                            </div>
 */
