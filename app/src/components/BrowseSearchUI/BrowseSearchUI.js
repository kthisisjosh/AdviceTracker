import React from "react"
import Hit from "./Hit"
import algoliasearch from "algoliasearch"
import {
    InstantSearch,
    SearchBox,
    Hits,
    RefinementList,
    CurrentRefinements,
    ClearRefinements,
    InfiniteHits,
    Breadcrumb,
    SortBy,
    Pagination,
    HitsPerPage,
} from "react-instantsearch-dom"
import { Grid } from "@material-ui/core"

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY)

const BrowseSearchUI = () => {
    return (
        <Grid container direction="column" style={{ margin: "5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
            <InstantSearch searchClient={searchClient} indexName="Posts">
                <ClearRefinements />
                <CurrentRefinements />
                <SearchBox />
                <RefinementList attribute="category" />
                <Hits hitComponent={Hit} />
            </InstantSearch>
        </Grid>
    )
}

export default BrowseSearchUI
