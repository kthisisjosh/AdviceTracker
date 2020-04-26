import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link, useHistory } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"
import Toggle from "react-toggle"
import useDarkMode from "use-dark-mode"
import { Button } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { LOGOUT } from "../../redux/types/auth"

const Header = () => {
    const darkMode = useDarkMode(false)
    const history = useHistory()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({ type: LOGOUT })
        history.push("/")
    }

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
                            <Link to="/profile" style={{ marginBottom: "2vw", textDecoration: "none", color: "white" }}>
                                <Typography variant="button">Profile</Typography>
                            </Link>
                            <Button onClick={handleLogout} className="landing-header-link" style={{ margin: "0", textDecoration: "none" }}>
                                <Typography variant="button" align="left" style={{ textDecoration: "none" }}>
                                    Logout
                                </Typography>
                            </Button>
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
                    <Link to="/profile" className="landing-header-link" style={{ margin: "0 0 0 5vw", textDecoration: "none" }}>
                        <Typography variant="button" style={{ textDecoration: "none" }}>
                            Profile
                        </Typography>
                    </Link>
                    <Button onClick={handleLogout} className="landing-header-link" style={{ margin: "0 0 0 5vw", textDecoration: "none" }}>
                        <Typography variant="button" style={{ textDecoration: "none" }}>
                            Logout
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header
