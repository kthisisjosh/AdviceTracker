import React, { Fragment } from "react"
import { Grid, Typography, Paper } from "@material-ui/core"
import AddNewButton from "./AddNewButton"
import InboxScrollPane from "./InboxScrollPane"

const Inbox = () => {
    return (
        <Fragment>
            <Grid container style={{ marginTop: "3vh", marginRight: "15vw", marginBottom: "3vh", marginLeft: "15vw", width: "auto", height: "auto"}}>
                <Grid container>
                    <Typography variant="h4" align="left" style={{ marginRight: "2.5vw" }}>
                        Inbox
                    </Typography>
                    <AddNewButton />
                </Grid>

                <Grid container style={{width: "100%", height: "12.5vw"}}>
                    <InboxScrollPane />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Inbox