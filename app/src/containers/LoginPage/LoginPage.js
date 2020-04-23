import React from "react"
import { googleLogin, githubLogin } from "../../redux/actions/auth"
import Typography from "@material-ui/core/Typography"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import GoogleLogin from "react-google-login"
import GithubLogin from "react-github-login"
import Button from "@material-ui/core/Button"
import Footer from "../../components/Footer/Footer"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"

const LoginPage = (props) => {
    return (
        <>
            <LandingHeader />
            <section>
                <Grid container style={{ height: "715px" }}>
                    <Grid
                        item
                        className="login-demo-grid"
                        xl={5}
                        md={5}
                        style={{
                            height: "715px",
                            backgroundColor: "#EDEDED",
                            borderTop: "1px solid black",
                            borderBottom: "1px solid black",
                            borderRight: "1px solid black",
                            textAlign: "center",
                        }}
                    >
                        <img alt="login-demo" src="./login-sample.JPG" style={{ height: "550px", width: "500px", margin: "35px 15px 35px 15px" }} />
                    </Grid>
                    <Grid
                        item
                        className="login-grid"
                        xl={7}
                        md={7}
                        sm={12}
                        xs={12}
                        style={{ height: "715px", backgroundColor: "#FCFCFC", borderTop: "1px solid black", borderBottom: "1px solid black", padding: "auto",}}
                    >
                        <Paper className="login-paper" elevation={3} style={{ margin: "70px 350px 50px 150px", position: "absolute", width: "460px", height: "500px" }}>
                            <div style={{ width: "460px, height: 200px", backgroundColor: "#FFFFFF" }}>
                                <Button style={{ marginTop: "50px" }}>Registration</Button>
                                <Button style={{ marginTop: "50px" }}>Sign-in</Button>
                            </div>
                            <div style={{ position: "relative", width: "460px", height: "50px", backgroundColor: "#FAFAFA", alignText: "center" }}>
                                <Typography style={{ paddingLeft: "8px", paddingTop: "12.5px" }}>You can sign in with social</Typography>
                            </div>
                            <div style={{ textAlign: "center", height: "250px" }}>
                                <div style={{ display: "inline-block", paddingTop: "50px" }}>
                                    <GoogleLogin
                                        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                        onSuccess={googleLogin}
                                        onFailure={googleLogin}
                                        cookiePolicy={"single_host_origin"}
                                    />
                                </div>
                                <div style={{ paddingTop: "50px" }}>
                                    <GithubLogin
                                        clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                                        buttonText="Sign in using Github"
                                        onSuccess={githubLogin}
                                        onFailure={githubLogin}
                                        className="github-login-btn"
                                    />
                                </div>
                                <div style={{ paddingTop: "75px" }}>
                                    <Button style={{ width: "350px", height: "50px", backgroundColor: "#F2994A", color: "#FFFFFF" }}>
                                        Register Coming Soon
                                    </Button>
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
