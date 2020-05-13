import React, { useState } from "react"
import Hit from "../../components/BrowseSearchUI/Hit"
import algoliasearch from "algoliasearch"
import qs from "qs"
import { InstantSearch, RefinementList, CurrentRefinements, InfiniteHits } from "react-instantsearch-dom"
import { Grid, Divider } from "@material-ui/core"
import CustomSearchBox from "../../components/BrowseSearchUI/CustomSearchBox"
import CustomStats from "../../components/BrowseSearchUI/CustomStats"
import CustomSortBy from "../../components/BrowseSearchUI/CustomSortBy"
import CustomClearRefinements from "../../components/BrowseSearchUI/CustomClearRefinements"
import { useHistory } from "react-router-dom"
import CustomRefinementList from "../../components/BrowseSearchUI/CustomRefinementList"

const createURL = (state) => `?${qs.stringify(state)}`

const searchStateToUrl = (location, searchState) => (searchState ? `${location.pathname}${createURL(searchState)}` : "")
const urlToSearchState = (location) => qs.parse(location.search.slice(1))

const BrowseSearchUI = ({ location, user }) => {
    const header =
        user != null
            ? {
                  headers: {
                      "X-Algolia-UserToken": user.userID,
                  },
              }
            : null
    const DEBOUNCE_TIME = 400
    const searchClient = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_API_KEY, header)
    const history = useHistory()
    const [searchState, setSearchState] = useState(urlToSearchState(location))
    const [debouncedSetState, setDebouncedSetState] = useState(null)

    const onSearchStateChange = (updatedSearchState) => {
        clearTimeout(debouncedSetState)

        setDebouncedSetState(
            setTimeout(() => {
                history.push(searchStateToUrl(location, updatedSearchState), updatedSearchState)
            }, DEBOUNCE_TIME)
        )
        setSearchState(updatedSearchState)
    }

    return (
        <Grid
            className="category-grid"
            container
            direction="column"
            style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}
        >
            <InstantSearch
                searchClient={searchClient}
                indexName="Posts"
                searchState={searchState}
                onSearchStateChange={onSearchStateChange}
                createURL={createURL}
            >
                <CustomSearchBox />
                <Grid container direction="row">
                    <Grid item md={2} sm={12} style={{ marginTop: "1em" }}>
                        <CustomStats />
                        <CustomSortBy
                            items={[
                                { value: "Posts", label: "Featured" },
                                { value: "Posts_Date_Desc", label: "Date latest" },
                            ]}
                            defaultRefinement="Posts_Date_Desc"
                        />
                        <Divider style={{ margin: "2vh 2.5vw 2vh 0" }} variant="middle" className="submitpage-divider" />
                        <CustomClearRefinements />
                        <CustomRefinementList attribute="category" limit={15} searchable />
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
