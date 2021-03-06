import React, { useEffect } from "react"
import { googleLogin, githubLogin } from "../../redux/actions/auth"
import { connect } from "react-redux"
import Typography from "@material-ui/core/Typography"
import LandingHeader from "../../components/LandingHeader/LandingHeader"
import GoogleLogin from "react-google-login"
import GithubLogin from "react-github-login"
import Button from "@material-ui/core/Button"
import Footer from "../../components/Footer/Footer"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { useHistory } from "react-router-dom"
import { Helmet } from "react-helmet"
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const LoginPage = (props) => {
    const { googleLogin, githubLogin, isAuthenticated, user, checked, token, categories } = props
    const history = useHistory()
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 1300px)'
    })

    useEffect(() => {
        if (checked && isAuthenticated) {
            localStorage.setItem("jwtToken", token)
            history.push("/dashboard")
        }
    }, [isAuthenticated, user, history])

    return (
        <>
            <Helmet>
                <title>Login | AdviceTracker</title>
                <meta
                    name="description"
                    content="Login today to track the awesome advice you are given, so you are always one step ahead. Find & save valuable advice on the way by browsing
                    user submitted advice."
                />
                <link rel="canonical" href="https://advicetracker.life/login" />
            </Helmet>
            <LandingHeader />
            <Grid container style={{ height: "750px" }}>
                <Grid
                    item
                    className="login-demo-grid"
                    xl={5}
                    md={5}
                    style={{
                        height: "750px",
                        backgroundColor: "#EDEDED",
                        borderTop: "1px solid black",
                        borderBottom: "1px solid black",
                        borderRight: "1px solid black",
                        textAlign: "center",
                    }}
                >
                    <motion.img
                        initial={{ scale: 0.25, opacity: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        alt="login-demo"
                        src="./login-sample.jpg"
                        style={{ height: "550px", width: "500px", margin: "75px 15px 35px 15px", borderRadius: "15px" }}
                    />
                </Grid>
                <Grid
                    item
                    className="login-grid"
                    xl={7}
                    md={7}
                    sm={12}
                    xs={12}
                    style={{
                        height: "750px",
                        backgroundColor: "#FCFCFC",
                        borderTop: "1px solid black",
                        borderBottom: "1px solid black",
                        padding: "auto",
                    }}
                >
                    <Paper
                        className="login-paper"
                        elevation={3}
                        style={{ margin: "70px 350px 50px 150px", position: "absolute", width: isDesktop ? "32.5%" : "75%", height: "500px" }}
                    >
                        <div style={{ width: "460px, height: 200px" }}>
                            <Button style={{ marginTop: "50px" }}>Registration</Button>
                            <Button style={{ marginTop: "50px" }}>Sign-in</Button>
                        </div>
                        <div style={{ position: "relative", width: "100%", height: "50px", backgroundColor: "#FAFAFA", alignText: "center" }}>
                            <Typography style={{ paddingLeft: "8px", paddingTop: "12.5px" }}>Sign-up/Sign-in with social</Typography>
                        </div>
                        <div style={{ textAlign: "center", height: "300px", backgroundColor: "#FEFEFE" }}>
                            <div style={{ display: "inline-block", paddingTop: "50px" }}>
                                <GoogleLogin
                                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                                    onSuccess={(res) => {
                                        googleLogin(res, history, categories)
                                    }}
                                    onFailure={googleLogin}
                                    disabled={false}
                                />
                            </div>
                            <div style={{ paddingTop: "50px" }}></div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </>
    )
}

const mapStateToProps = ({ sessionState, adviceState }) => ({
    isAuthenticated: sessionState.authenticated,
    checked: sessionState.checked,
    user: sessionState.user,
    token: sessionState.user.token,
    categories: adviceState.categories,
})

export default connect(mapStateToProps, { googleLogin, githubLogin })(LoginPage)

//<GithubLogin
//
//    buttonText="Sign in using Github"
//    onSuccess={githubLogin}
//    onFailure={githubLogin}
//    className="github-login-btn"
///>
