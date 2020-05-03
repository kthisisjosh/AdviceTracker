import React, { Fragment } from "react"
import { Grid, Typography } from "@material-ui/core"
import AddNewButton from "./AddNewButton"
import InboxScrollPane from "./InboxScrollPane"

const Inbox = (props) => {

    return (
        <Fragment>
            <Grid container className="inbox-grid" style={{ marginTop: "2vh", marginRight: "15vw", marginBottom: "3vh", marginLeft: "15vw", width: "auto", height: "auto"}}>
                <Grid container>
                    <Typography variant="h4" align="left" style={{ marginRight: "2.5vw" }}>
                        Inbox
                    </Typography>
                    <AddNewButton handleAddClick={props.handleAddClick}/>
                </Grid>

                <Grid container style={{width: "100%", height: "auto"}}>
                    <InboxScrollPane handleSubmit={props.handleSubmit} handleAddToCategory={props.handleAddToCategory} handleDelete={props.handleDelete} handleEditorChange={props.handleEditorChange} toAdd={props.toAdd} inbox={props.inbox}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Inbox
