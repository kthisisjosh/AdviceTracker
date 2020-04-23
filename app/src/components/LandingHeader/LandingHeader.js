import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import LoginButton from "../../components/LoginButtons/LoginButton"
import RegisterButton from "../../components/LoginButtons/RegisterButton"
import { Link } from "react-router-dom"
import { slide as Menu } from "react-burger-menu"

const Header = () => {

    return (
        <header style={{ backgroundColor: "#FFFFFF", margin: "0", }}>
            <Grid container direction="row" alignItems="center" style={{ height: "60px", alignContent: "center" }}>
                <Grid item style={{ marginLeft: "14vw" }}>
                    <img alt="logo" src="Logo.svg" x="50" y="18" height="40" width="40" />
                </Grid>
                <Grid item style={{ marginRight: "auto" }}>
                    <Typography variant="h4" justify="left" style={{ marginTop: "0.5vh", marginBottom: "1vh", marginLeft: "0.5vw", color: "black" }}>
                        Advice Tracker
                    </Typography>
                </Grid>

                <Grid item style={{ marginLeft: "auto", marginRight: "5vw" }}>
                    <Menu right noOverlay>
                        <Link to="/browse" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "black" }}>
                            <Typography variant="button">Browse</Typography>
                        </Link>
                        <Link to="/login" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "black" }}>
                            <Typography variant="button">Login/Register</Typography>
                        </Link>
                    </Menu>
                </Grid>

                <Grid item className="navbar-grid" style={{ marginLeft: "auto" }}>
                    <Link to="/browse" style={{ margin: "0 0 0 5vw", textDecoration: "none", color: "black" }}>
                        <Typography variant="button">Browse</Typography>
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
