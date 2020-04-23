import React from "react"
import { Button, Typography } from "@material-ui/core"

export const LoginButton = () => {
    return (
        <Button className="landing-hero-btn" variant="outlined" style={{ width: "350px", height: "65px", color: "#2D9CDB" }} href="/login">
            <Typography variant="button">Login</Typography>
        </Button>
    )
}

export default LoginButton
