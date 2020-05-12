import React, { useState } from "react"
import { Grid, Typography, TextField, Button } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"

const CategorySubmitBody = (props) => {
    const [categoryName, setCategoryName] = useState("")

    const handleClick = (e) => {
        props.handleCategorySubmit(categoryName)
        setCategoryName("")
    }

    return (
        <Grid container style={{ marginTop: "1.5vh" }} direction="column">
            <Grid item style={{ marginTop: "0.5vh", marginBottom: "0.5vh" }}>
                <Typography variant="h4">Categories</Typography>
            </Grid>
            <Grid container direction="row" style={{ marginTop: "0.5vh" }}>
                <Grid item>
                    <TextField
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            marginRight: "0.5vw",
                            border: "2px solid black",
                            overflow: "hidden",
                            borderRadius: 4,
                            backgroundColor: "#fcfcfb",
                            "&:hover": {
                                backgroundColor: "#fff",
                            },
                            "&$focused": {
                                backgroundColor: "#fff",
                            },
                        }}
                        value={categoryName}
                        onChange={(e) => setCategoryName(e.target.value)}
                        variant="standard"
                    />
                    <Button
                        size="small"
                        variant="contained"
                        onClick={handleClick}
                        type="submit"
                        style={{ backgroundColor: "#F2994A" }}
                        startIcon={<AddIcon />}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CategorySubmitBody
