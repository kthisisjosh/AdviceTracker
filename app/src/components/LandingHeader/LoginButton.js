import { Button } from "@material-ui/core/"
import React from "react"
import { Typography } from "@material-ui/core"

export const LoginButton = () => {
    return (
        <Button className="landing-hero-btn" variant="outlined" style={{ width: "130px", height: "40px", color: "#2D9CDB", backgroundColor: "#f5f5f5" }} href="/login">
            <Typography variant="button">Login</Typography>
        </Button>
    )
}

export default LoginButton
