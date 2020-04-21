import React from "react"
import { Typography } from "@material-ui/core"

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#FFFFFF", margin: "0", width: "100vw", height: "200px", textAlign: "center" }}>
            <Typography variant="h5" justify="center" style={{ color: "black", paddingTop: "75px" }}>
                Advice Tracker
            </Typography>
            <Typography variant="h8" style={{marginTop: "55px", marginLeft: "-77px", position: "absolute", lineHeight: "24px"}} >
                © Advice Tracker 2020
            </Typography>
            <Typography variant="h8" style={{marginTop: "75px", marginLeft: "-110px", position: "absolute", lineHeight: "24px"}} >
                Made with ❤️ by <a style={{textDecoration: "none", color: "inherit"}} href="https://www.joshbautista.com">Joshua Bautista</a>
            </Typography>
        </footer>
    )
}

export default Footer
