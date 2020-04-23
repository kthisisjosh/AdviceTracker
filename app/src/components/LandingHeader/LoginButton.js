import Button from "@material-ui/core/Button"
import React from "react"

export const LoginButton = () => {
    return (
        <Button variant="outlined" style={{ width: "130px", height: "40px", color: "#2D9CDB" }} href="/login">
            Login
        </Button>
    )
}

export default LoginButton
