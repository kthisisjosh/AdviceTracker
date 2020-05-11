import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { Grid, Typography, Avatar } from "@material-ui/core"
import { Helmet } from "react-helmet"
import { getUserInfo } from "../../redux/actions/users"
import Hit from "../../components/BrowseSearchUI/Hit"
import Footer from "../../components/Footer/Footer"

const ProfilePage = (props) => {
    const { isAuthenticated, user, match, getUserInfo, currentUser } = props
    const history = useHistory()

    useEffect(() => {
        getUserInfo(match.params.username)
    }, [])
    return (
        <Fragment>
            <Helmet>
                <title>Profile | AdviceTracker</title>
                <meta
                    name="description"
                    content={currentUser.username + "'s User Profile - Find & save valuable advice on the way by browsing user submitted advice."}
                />
                <link rel="canonical" href={"https://advicetracker.life/user/" + currentUser.username.replace(/ /g, "_") + "/"} />
            </Helmet>
            <Header />
            {isAuthenticated && <Navbar />}
            <Grid container direction="column" style={{ height: "1000px", width: "100vw" }}>
                <Grid
                    container
                    direction="row"
                    style={{ width: "auto", backgroundColor: "white", marginLeft: "15%", marginRight: "15%", height: "auto" }}
                >
                    <Grid item style={{ marginTop: "2vh", marginRight: "2vw" }}>
                        <a href={"/user/" + currentUser.username.replace(/ /g, "_")}>
                            <Avatar
                                style={{ height: "10vh", width: "5vw" }}
                                variant="rounded"
                                alt={currentUser.username}
                                src={currentUser.profileUrl}
                            >
                                {currentUser.username.charAt(0)}
                            </Avatar>
                        </a>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: "50px", color: "black", fontWeight: "bold" }} align="center" variant="h3">
                            {currentUser.username}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ width: "70vw", marginLeft: "15%", marginRight: "15%" }}>
                    <Grid item>
                        <Typography variant="h4">Submitted Advice</Typography>
                    </Grid>
                    {currentUser.posts.map((post) => (
                        <Grid item style={{ width: "100%" }}>
                            <Hit hit={{ ...post, category: post.category.split(",") }} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ sessionState, userState }) => ({
    isAuthenticated: sessionState.authenticated,
    user: sessionState.user,
    currentUser: userState.currentUser,
})

const mapDispatchToProps = { getUserInfo }

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
