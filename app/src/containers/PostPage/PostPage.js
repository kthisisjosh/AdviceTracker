import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { getPost } from "../../redux/actions/posts"
import Hit from "../../components/BrowseSearchUI/Hit"

const PostPage = (props) => {
    const { isAuthenticated, user, getPost, match, currentPost } = props
    const history = useHistory()

    useEffect(() => {
        getPost(match.params.category, match.params.content)
    }, [])

    return (
        <Fragment>
            <Helmet>
                <title>{match.params.category} | AdviceTracker</title>
                <meta
                    name="description"
                    content="Help others by submitting and sharing your advice for others to see. Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href={"https://advicetracker.life/browse/" + match.params.category + "/" + match.params.content + "/"} />
            </Helmet>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
                <Hit hit={{ ...currentPost, category: currentPost.category.split(",") }} />
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ sessionState, postsState }) => ({
    isAuthenticated: sessionState.authenticated,
    user: sessionState.user,
    currentPost: postsState.currentPost,
})

const mapDispatchToProps = { getPost }

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
