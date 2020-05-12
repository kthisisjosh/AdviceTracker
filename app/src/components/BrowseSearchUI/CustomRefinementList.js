import React from "react"

import { Highlight, connectRefinementList } from "react-instantsearch-dom"
import { Grid, Button, TextField } from "@material-ui/core"

const CustomRefinementList = connectRefinementList(({ items, isFromSearch, refine, searchForItems, createURL }) => (
    <Grid container direction="column" style={{ marginTop: "2.5vh" }}>
        <Grid item style={{ marginBottom: "0.5vh" }}>
            <input
                style={{ height: "40px", borderRadius: "5px"}}
                type="search"
                placeholder="Search for categories"
                onChange={(event) => searchForItems(event.currentTarget.value)}
            />
        </Grid>
        {items.map((item) => (
            <Grid item style={{ marginTop: "0.5vh" }}>
                <Button variant="contained" size="small" style={{ backgroundColor: item.isRefined ? "#cfcaca" : "white" }}>
                    <a
                        href={createURL(item.value)}
                        style={{ fontWeight: item.isRefined ? "bold" : "", color: "black", textDecoration: "none" }}
                        onClick={(event) => {
                            event.preventDefault()
                            refine(item.value)
                        }}
                    >
                        {isFromSearch ? <Highlight attribute="label" hit={item} /> : item.label} ({item.count})
                    </a>
                </Button>
            </Grid>
        ))}
    </Grid>
))

export default CustomRefinementList
