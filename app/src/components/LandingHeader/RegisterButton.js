import Button from "@material-ui/core/Button"
import React from "react"
import { Typography } from "@material-ui/core"

export const RegisterButton = (props) => {
    return (
        <Button style={{ width: "130px", height: "40px", backgroundColor: "#F2994A", color: "#FFFFFF" }} href="/login">
            <Typography variant="button">Register</Typography>
        </Button>
    )
}

export default RegisterButton
