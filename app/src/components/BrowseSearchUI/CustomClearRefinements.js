import React from "react"
import { Button, Typography, Grid } from "@material-ui/core"
import { connectCurrentRefinements } from "react-instantsearch-dom"

const CustomClearRefinements = connectCurrentRefinements(({ items, refine }) => (
    <Grid item style={{ margin: "2vh 1vw 1vh 0" }}>
        <Button onClick={() => refine(items)} style={{ backgroundColor: "white", margin: "auto", maxHeight: "3.5vh" }}>
            <Typography variant="button">Clear filter</Typography>
        </Button>
    </Grid>
))

export default CustomClearRefinements
