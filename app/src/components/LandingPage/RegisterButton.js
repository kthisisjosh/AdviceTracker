import React from "react"
import { Button, Typography } from "@material-ui/core"

export const RegisterButton = () => {
    return (
        <Button
            className="landing-hero-btn"
            variant="outlined"
            style={{ width: "350px", height: "65px", backgroundColor: "#F2994A", color: "#FFFFFF" }}
            href="/login"
        >
            <Typography variant="button">Register</Typography>
        </Button>
    )
}

export default RegisterButton
