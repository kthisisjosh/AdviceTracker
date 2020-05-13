import React, { Fragment, useEffect } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { getPost, deletePost } from "../../redux/actions/posts"
import Hit from "../../components/BrowseSearchUI/Hit"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const PostPage = (props) => {
    const { getPost, match, currentPost, user, deletePost } = props
    const MySwal = withReactContent(Swal)
    const history = useHistory()

    useEffect(() => {
        getPost(match.params.category, match.params.content)
    }, [])

    const handleDeleteClick = (id) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                deletePost(id)
                setTimeout(() => history.push("/browse"), 750)
            }
        })
    }

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
            <Grid className="category-grid" container direction="column" style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
                <Hit handleDeleteClick={handleDeleteClick} user={user} hit={{ ...currentPost, category: currentPost.category.split(",") }} />
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ sessionState, postsState }) => ({
    currentPost: postsState.currentPost,
    user: sessionState.user,
})

const mapDispatchToProps = { getPost, deletePost }

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)
