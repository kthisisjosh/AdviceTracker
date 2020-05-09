import React from "react"
import Hit from "./Hit"
import algoliasearch from "algoliasearch"
import {
    InstantSearch,
    Hits,
    RefinementList,
    CurrentRefinements,
    ClearRefinements,
    InfiniteHits,
    Breadcrumb,
    SortBy,
    Pagination,
    HitsPerPage,
    Stats,
} from "react-instantsearch-dom"
import { Grid } from "@material-ui/core"
import CustomSearchBox from "./CustomSearchBox"
import CustomStats from "./CustomStats"
import CustomSortBy from "./CustomSortBy"
import CustomClearRefinements from "./CustomClearRefinements"

const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY)

const BrowseSearchUI = () => {
    return (
        <Grid container direction="column" style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
            <InstantSearch searchClient={searchClient} indexName="Posts">
                <CustomSearchBox />
                <Grid container direction="row">
                    <Grid container direction="column" md={2} sm={12} style={{ marginTop: "1em" }}>
                        <CustomStats />
                        <CustomSortBy
                            items={[
                                { value: "Posts", label: "Featured" },
                                { value: "Posts_Date_Desc", label: "Date latest" },
                                { value: "Posts_Likes_Desc", label: "Likes desc." },
                            ]}
                            defaultRefinement="Posts_Date_Desc"
                        />
                        <Grid item style={{ minHeight: "10vh", height: "auto", marginTop: "2vh", textAlign: "left" }}>
                            <CurrentRefinements />
                        </Grid>
                        <CustomClearRefinements />
                        <RefinementList attribute="category" limit={15} searchable />
                    </Grid>
                    <Grid item md={10} sm={12}>
                        <InfiniteHits hitComponent={Hit} />
                    </Grid>
                </Grid>
            </InstantSearch>
        </Grid>
    )
}

export default BrowseSearchUI
