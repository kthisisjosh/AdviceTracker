import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import LoginButton from "./LoginButton"
import RegisterButton from "./RegisterButton"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import Toggle from "react-toggle"
import useDarkMode from "use-dark-mode"

const Header = () => {
    const darkMode = useDarkMode(true)

    return (
        <header id="header" style={{ margin: "0" }}>
            <Grid container direction="row" alignItems="center" style={{ height: "60px", alignContent: "center" }}>
                <Grid item className="landing-logo" style={{ marginLeft: "14vw", marginTop: "1vh" }}>
                    <a href="/">
                        <img
                            alt="logo"
                            src={darkMode.value ? "https://advicetracker.life/AdviceLogoLight.png" : "https://advicetracker.life/AdviceLogo.png"}
                        />
                    </a>
                </Grid>

                <Grid item style={{ marginLeft: "auto", marginRight: "5vw" }}>
                    <Grid item className="toggle-grid" md={6}>
                        <Toggle
                            className="react-toggle-small"
                            defaultChecked={darkMode.value}
                            onChange={darkMode.toggle}
                            icons={{
                                checked: (
                                    <img
                                        style={{ pointerEvents: "none" }}
                                        width="16"
                                        height="14"
                                        alt="moon"
                                        aria-hidden
                                        src={"https://advicetracker.life/moon.png"}
                                    />
                                ),
                                unchecked: (
                                    <img
                                        style={{ pointerEvents: "none" }}
                                        width="16"
                                        height="14"
                                        alt="sun"
                                        aria-hidden
                                        src={"https://advicetracker.life/sun.png"}
                                    />
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Menu right noOverlay>
                            <Link to="/browse" style={{ marginBottom: "2vw", textDecoration: "none", color: "white" }}>
                                <Typography variant="button">Browse</Typography>
                            </Link>
                            <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                                <Typography variant="button">Login/Register</Typography>
                            </Link>
                        </Menu>
                    </Grid>
                </Grid>

                <Grid item className="navbar-grid" style={{ marginLeft: "auto", textAlign: "center" }}>
                    <Toggle
                        defaultChecked={darkMode.value}
                        onChange={darkMode.toggle}
                        icons={{
                            checked: (
                                <img
                                    style={{ pointerEvents: "none" }}
                                    width="16"
                                    height="14"
                                    alt="moon"
                                    aria-hidden
                                    src={"https://advicetracker.life/moon.png"}
                                />
                            ),
                            unchecked: (
                                <img
                                    style={{ pointerEvents: "none" }}
                                    width="16"
                                    height="14"
                                    alt="sun"
                                    aria-hidden
                                    src={"https://advicetracker.life/sun.png"}
                                />
                            ),
                        }}
                    />
                    <Link to="/browse" className="landing-header-link" style={{ margin: "0 0 0 5vw", textDecoration: "none" }}>
                        <Typography variant="button" style={{ textDecoration: "none" }}>
                            Browse
                        </Typography>
                    </Link>
                </Grid>
                <Grid item className="navbar-grid" style={{ marginLeft: "5vw", marginRight: "1vw" }}>
                    <LoginButton />
                </Grid>
                <Grid item className="navbar-grid" style={{ marginLeft: "1vw", marginRight: "15vw" }}>
                    <RegisterButton />
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
