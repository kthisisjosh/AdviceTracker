import React from "react"
import { Typography } from "@material-ui/core"

export const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#FFFFFF",margin: "0", width: "100vw", right: "0", height: "190px", textAlign: "center", margin: "0", boxSizing: "border-box", display: "inline"}}>
            <Typography variant="h5" justify="center" style={{ color: "black", paddingTop: "60px", paddingBottom: "15px" }}>
                Advice Tracker
            </Typography>

            <hr style={{width: "auto"}}/>

            <Typography variant="body2" style={{ margin: "auto", marginTop: "35px", lineHeight: "24px" }}>
                © Advice Tracker 2020
            </Typography>

            <Typography variant="body2" style={{ margin: "auto", lineHeight: "24px" }}>
                Made with{" "}
                <span role="img" aria-label="Heart">
                    ❤️
                </span>{" "}
                by{" "}
                <a style={{ textDecoration: "none", color: "inherit" }} href="https://www.joshbautista.com">
                    Joshua Bautista
                </a>
            </Typography>
        </footer>
    )
}

export default Footer
