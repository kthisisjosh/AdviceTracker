import Button from "@material-ui/core/Button"
import React from "react"

export const RegisterButton = (props) => {
    return (
        <Button style={{ width: "130px", height: "40px", backgroundColor: "#F2994A", color: "#FFFFFF" }} href="/login">
            Register
        </Button>
    )
}

export default RegisterButton
