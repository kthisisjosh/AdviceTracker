import React, { useState } from "react"
import { connectSortBy } from "react-instantsearch-dom"
import { Select, Input, InputLabel, MenuItem, withStyles, InputBase, Grid } from "@material-ui/core"

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1px solid #ced4da",
        fontSize: 16,
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
        "&:focus": {
            borderRadius: 4,
        },
    },
}))(InputBase)

const CustomSortBy = connectSortBy(({ items, refine, createURL }) => {
    const [selectedRefinement, setSelectedRefinement] = useState("Date latest")
    const handleChange = (event) => {
        setSelectedRefinement(event.target.value)
    }
    return (
        <Grid item style={{marginRight: "5vh"}}>
            <Select
                style={{ backgroundColor: "white", width: "100%", color: "black", margin: "auto" }}
                value={selectedRefinement}
                input={<BootstrapInput />}
                onChange={handleChange}
            >
                {items.map((item) => (
                    <MenuItem value={item.label}>
                        <a
                            href={createURL(item.value)}
                            style={{ fontWeight: item.isRefined ? "bold" : "", textDecoration: "none" }}
                            onClick={(event) => {
                                event.preventDefault()
                                refine(item.value)
                            }}
                        >
                            {item.label}
                        </a>
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    )
})
export default CustomSortBy
