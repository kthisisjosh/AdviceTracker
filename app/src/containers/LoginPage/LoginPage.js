import React from "react"
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const LoginPage = (props) => {
    return (
        <div style={{marginTop: "25vh", textAlign: "center"}}>
            <Typography variant="h2" align="center">Login</Typography>
            <Link to="/home"><Button variant="contained" color="primary" style={{marginTop: "15vh", width: "10vw", height: "6vh"}}>Login</Button></Link>
        </div>
    )
}

export default (LoginPage)
