import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography, Grid } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import UserInfo from "../../components/SubmitPage/UserInfo"
import SubmitBody from "../../components/SubmitPage/SubmitBody"

const SubmitPage = (props) => {
    const { isAuthenticated, user } = props
    const [adviceContent, setAdviceContent] = useState("")
    const history = useHistory()

    useEffect(() => {
        if (!isAuthenticated) {
            history.push("/login")
        }
    })

    const handleEditorChange = (content, editor) => {
        setAdviceContent(content)
    }

    const handleSubmit = () => {}

    return (
        <Fragment>
            <Helmet>
                <title>Submit Advice | AdviceTracker</title>
                <meta
                    name="description"
                    content="Help others by submitting and sharing your advice for others to see. Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href="https://advicetracker.life/submit" />
            </Helmet>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2.5vh 15vw 15vh 14vw", width: "auto", height: "auto", minHeight: "60vh" }}>
                <Grid item>
                    <Typography variant="h4" style={{ fontWeight: "bold" }}>
                        Submit Your Own Advice
                    </Typography>
                </Grid>
                <UserInfo user={user} />
                <SubmitBody handleEditorChange={handleEditorChange} handleSubmit={handleSubmit} />
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ authState }) => ({
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPage)
