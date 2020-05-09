import React from "react"
import { connectStats } from "react-instantsearch-dom"
import { Typography, Grid } from "@material-ui/core"

const CustomStats = connectStats(({ processingTimeMS, nbHits }) => (
    <Grid item>
        <Typography variant="body2">
            Found {nbHits} results in {processingTimeMS} ms
        </Typography>
    </Grid>
))

export default CustomStats
