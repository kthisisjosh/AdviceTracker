import React from "react"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import { connectSearchBox } from "react-instantsearch-dom"

const CustomSearchBox = connectSearchBox(({ currentRefinement, isSearchStalled, refine }) => (
    <Paper
        component="form"
        style={{
            padding: "0.5vh 0.5vw",
            display: "flex",
            alignItems: "center",
            height: "auto",
            width: "auto",
        }}
    >
        {isSearchStalled ? "My search is stalled" : ""}
        <InputBase
            style={{
                marginLeft: 1,
                flex: 1,
            }}
            placeholder="Search AdviceTracker"
            inputProps={{
                typeof: "search",
                "aria-valuetext": { currentRefinement },
                onChange: (event) => refine(event.currentTarget.value),
                "aria-label": "search advicetracker",
            }}
        />
        <IconButton
            disabled
            style={{
                padding: 10,
            }}
            aria-label="search"
        >
            <SearchIcon />
        </IconButton>
        <Divider
            style={{
                height: 28,
                margin: 4,
            }}
            orientation="vertical"
        />
    </Paper>
))

export default CustomSearchBox
