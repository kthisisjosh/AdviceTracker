import React from "react"
import { Paper, Grid, Button, Tooltip, Input, Typography, TextField } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const NewSubCategory = (props) => {
    return (
        <Grid item style={{ marginTop: "1vh", width: "auto" }}>
            <Paper style={{ padding: "1vh 1vw 1vh 1vw", width: "auto", backgroundColor: "#AFF4E4" }}>
                <Grid container direction="column">
                    <Grid item style={{ marginBottom: "0.5v", marginTop: "-0.5vh" }}>
                        <TextField name="desc" required label="Subcategory title" fullWidth onChange={props.handleChange} />
                    </Grid>
                    <Grid item style={{ marginBottom: "0.5vh" }}>
                        <Paper
                            style={{ padding: "0.5vh 0.5vw 0.5vh 0.5vw", marginTop: "0.75vh", marginBottom: "0.75vh", width: "auto", height: "5vh" }}
                        ></Paper>
                    </Grid>
                    <Grid item style={{ marginTop: "-0.75vh", marginBottom: "-0.5vh" }}>
                        <Button
                            size="small"
                            variant="contained"
                            onClick={props.handleSubmit}
                            type="submit"
                            style={{ backgroundColor: "F2994A" }}
                            startIcon={<AddIcon />}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default NewSubCategory
