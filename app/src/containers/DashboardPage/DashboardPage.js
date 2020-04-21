import React, { useEffect, Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"

const DashboardPage = (props) => {

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container style={{margin: "1vw"}} justify="center" direction="column">
                
            </Grid>
        </Fragment>
    )
}

export default DashboardPage