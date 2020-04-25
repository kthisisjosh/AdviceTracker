import React, { Fragment, useState } from "react"
import { Grid, Typography } from "@material-ui/core"
import AddNewButton from "./AddNewButton"
import InboxScrollPane from "./InboxScrollPane"

const Inbox = (props) => {
    const [toAdd, setToAdd] = useState(false)

    const handleAddClick = () => {
        setToAdd(true)
    }

    const handleEditorChange = (content, editor) => {
     console.log('Content was updated:', content);
   }

    return (
        <Fragment>
            <Grid container style={{ marginTop: "3vh", marginRight: "15vw", marginBottom: "3vh", marginLeft: "15vw", width: "auto", height: "auto"}}>
                <Grid container>
                    <Typography variant="h4" align="left" style={{ marginRight: "2.5vw" }}>
                        Inbox
                    </Typography>
                    <AddNewButton handleAddClick={handleAddClick}/>
                </Grid>

                <Grid container style={{width: "100%", height: "15vw"}}>
                    <InboxScrollPane handleEditorChange={handleEditorChange} toAdd={toAdd} inbox={props.inbox}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Inbox
