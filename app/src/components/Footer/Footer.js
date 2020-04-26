import React from "react"
import { Typography } from "@material-ui/core"
import useDarkMode from "use-dark-mode"

export const Footer = () => {
    const darkMode = useDarkMode()

    return (
        <footer
            style={{
                margin: "0",
                width: "100vw",
                right: "0",
                height: "auto",
                textAlign: "center",
                boxSizing: "border-box",
                display: "inline-block",
            }}
        >
            <div style={{marginTop: "5vh"}}>
                <a href="/">
                    <img alt="logo" src={darkMode.value ? "./AdviceLogoLight.png" : "./AdviceLogo.png"} />
                </a>
            </div>

            <hr style={{ width: "auto" }} />

            <Typography variant="body2" style={{ margin: "auto", marginTop: "35px", lineHeight: "24px" }}>
                © Advice Tracker 2020
            </Typography>

            <Typography variant="body2" style={{ margin: "auto", lineHeight: "24px" }}>
                Made with{" "}
                <span role="img" aria-label="Heart">
                    ❤️
                </span>{" "}
                by{" "}
                <a style={{ color: "inherit" }} href="https://www.joshbautista.com">
                    Joshua Bautista
                </a>
            </Typography>
        </footer>
    )
}

export default Footer
