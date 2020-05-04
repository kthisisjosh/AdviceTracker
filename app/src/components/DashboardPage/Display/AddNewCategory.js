import React from "react"
import { Paper, TextField, Grid } from "@material-ui/core"
import AddNewButton from "../Inbox/AddNewButton"

const AddNewCategory = (props) => {
    return (
        <Grid style={{ width: "100%", height: "auto", marginBottom: "2vh" }}>
            <Paper style={{ padding: "0.25vh 1vw 1vh 1vw", height: "auto" }}>
                <Grid container direction="column">
                    <Grid item>
                        <TextField name="title" required label="Title" onChange={props.handleChange} />
                    </Grid>

                    <Grid item style={{ marginTop: "-0.75vh", marginBottom: "2vh" }}>
                        <TextField name="desc" required label="Description" fullWidth onChange={props.handleChange} />
                    </Grid>

                    <Grid item>
                        <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw", height: "8vh", marginBottom: "2vh" }} />
                    </Grid>

                    <Grid item>
                        <AddNewButton handleAddClick={props.handleSubmit} />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AddNewCategory
