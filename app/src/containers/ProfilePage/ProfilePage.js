import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { Grid, Typography, Avatar, Divider } from "@material-ui/core"
import { Helmet } from "react-helmet"
import { getUserInfo } from "../../redux/actions/users"
import Hit from "../../components/BrowseSearchUI/Hit"
import Footer from "../../components/Footer/Footer"
import { useMediaQuery } from 'react-responsive'

const ProfilePage = (props) => {
    const { isAuthenticated, user, match, getUserInfo, currentUser } = props
    const history = useHistory()
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 600px)'
    })

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
            <Grid className="profile-grid" container direction="column" style={{ height: "auto", width: "100vw", marginTop: "2.5vh", minHeight: "75vh" }}>
                <Grid container direction="row" style={{ width: "auto", marginLeft: "15%", marginRight: "15%", height: "auto" }}>
                    <Grid item style={{ marginTop: "2vh", marginRight: "2vw" }}>
                        <a href={"/user/" + currentUser.username.replace(/ /g, "_")}>
                            <Avatar
                                style={{ height: "110px", width: "110px" }}
                                variant="circle"
                                alt={currentUser.username}
                                src={currentUser.profileUrl}
                            >
                                {currentUser.username.charAt(0)}
                            </Avatar>
                        </a>
                    </Grid>
                    <Grid item>
                        <Typography style={{ marginTop: "50px", fontWeight: "bold" }} align="center" variant={isDesktop ? "h3" : "h5"}>
                            {currentUser.username}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: "15%", marginRight: "15%"}}>
                    <Divider style={{ margin: "5vh 0 1.5vh 0" }} variant="middle" className="submitpage-divider" />
                </Grid>
                <Grid container style={{ width: "70vw", marginLeft: "15%", marginRight: "15%", marginTop: "2.5vh" }}>
                    <Grid item>
                        <Typography variant={isDesktop ? "h4" : "h5"}>Submitted Advice</Typography>
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
