import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import Toggle from "react-toggle"
import useDarkMode from "use-dark-mode"

const Header = () => {
    const darkMode = useDarkMode(false)

    return (
        <header id="header" style={{ margin: "0", backgroundColor: "#434343" }}>
            <Grid container direction="row" alignItems="center" style={{ height: "60px", alignContent: "center" }}>
                <Grid item className="landing-logo" style={{ marginLeft: "14vw", marginTop: "1vh" }}>
                    <a href="/">
                        <img alt="logo" src={"./AdviceLogoLight.png"} />
                    </a>
                </Grid>

                <Grid item style={{ marginLeft: "auto", marginRight: "5vw" }}>
                    <Grid item className="toggle-grid" md={6}>
                        <Toggle
                            className="react-toggle-small"
                            defaultChecked={darkMode.value}
                            onChange={darkMode.toggle}
                            icons={{
                                checked: <img style={{ pointerEvents: "none" }} width="16" height="14" alt="moon" aria-hidden src={"./moon.png"} />,
                                unchecked: <img style={{ pointerEvents: "none" }} width="16" height="14" alt="sun" aria-hidden src={"./sun.png"} />,
                            }}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <Menu right noOverlay>
                            <Link to="/browse" style={{ marginBottom: "2vw", textDecoration: "none", color: "white" }}>
                                <Typography variant="button">Profile</Typography>
                            </Link>
                        </Menu>
                    </Grid>
                </Grid>

                <Grid item className="navbar-grid" style={{ marginLeft: "auto", textAlign: "center", marginRight: "15vw" }}>
                    <Toggle
                        defaultChecked={darkMode.value}
                        onChange={darkMode.toggle}
                        icons={{
                            checked: <img style={{ pointerEvents: "none" }} width="16" height="14" alt="moon" aria-hidden src={"./moon.png"} />,
                            unchecked: <img style={{ pointerEvents: "none" }} width="16" height="14" alt="sun" aria-hidden src={"./sun.png"} />,
                        }}
                    />
                    <Link to="/browse" className="landing-header-link" style={{ margin: "0 0 0 5vw", textDecoration: "none" }}>
                        <Typography variant="button" style={{ textDecoration: "none" }}>
                            Profile
                        </Typography>
                    </Link>
                    <Link to="/browse" className="landing-header-link" style={{ margin: "0 0 0 5vw", textDecoration: "none" }}>
                        <Typography variant="button" style={{ textDecoration: "none" }}>
                            Logout
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
