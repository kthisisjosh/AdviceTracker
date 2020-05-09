import React from "react"
import { connectStats } from "react-instantsearch-dom"
import { Typography } from "@material-ui/core"

const CustomStats = connectStats(({ processingTimeMS, nbHits }) => (
    <Typography variant="body2" align="center">
        Found {nbHits} results in {processingTimeMS} ms
    </Typography>
))

export default CustomStats
