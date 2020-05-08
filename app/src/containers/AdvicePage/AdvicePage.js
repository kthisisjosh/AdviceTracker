import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid, Tooltip, Button, Paper } from "@material-ui/core"
import { connect } from "react-redux"
import { submitAdvice, deleteAdvice, updateAdvice } from "../../redux/actions/advice"
import TinyMCEEditor from "../../components/DashboardPage/Inbox/TinyMCEEditor"
import AddIcon from "@material-ui/icons/Add"
import { useHistory } from "react-router-dom"

const AdvicePage = (props) => {
    const { categories, match, submitAdvice, user, updateAdvice } = props
    const [adviceContent, setAdviceContent] = useState("")
    const [currAdvice, setCurrAdvice] = useState({ content: "" })
    const history = useHistory()

    useEffect(() => {
        const foundCategory = categories.find((category) =>
            category.subcategories.find((subcategory) => subcategory.advice.find((advice) => advice.adviceID === match.params.id))
        )
        const foundSubCategory = foundCategory.subcategories.find((subcategory) =>
            subcategory.advice.filter((advice) => advice.adviceID === match.params.id)
        )
        const foundAdvice = foundSubCategory.advice.filter((advice) => advice.adviceID === match.params.id)

        setCurrAdvice(...foundAdvice)
        setAdviceContent(currAdvice.content)
    }, [categories, match.params.id])

    const handleEditorChange = (content, editor) => {
        setAdviceContent(content)
    }

    const handleEditSubmit = () => {
        updateAdvice(adviceContent, currAdvice.adviceID)
        setAdviceContent("")
        setTimeout(() => history.push("/dashboard"), 1000)
    }

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto", height: "auto", minHeight: "80vh" }}>
                <Paper style={{ width: "100%" }}>
                    <Grid item style={{ marginTop: "2vh", marginLeft: "1.5vw", marginRight: "1.5vw" }}>
                        <TinyMCEEditor initialValue={currAdvice.content} handleEditorChange={handleEditorChange} />
                    </Grid>
                    <Grid item style={{ marginBottom: "1vh", marginLeft: "1.5vw", paddingTop: "1vh", paddingBottom: "1vh" }}>
                        <Tooltip title="Submit Edit">
                            <Button
                                size="small"
                                variant="contained"
                                onClick={handleEditSubmit}
                                type="submit"
                                style={{ backgroundColor: "F2994A" }}
                                startIcon={<AddIcon />}
                            >
                                Add
                            </Button>
                        </Tooltip>
                    </Grid>
                </Paper>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, authState }) => ({
    categories: adviceState.categories,
    user: authState.user,
})

const mapDispatchToProps = { submitAdvice, deleteAdvice, updateAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(AdvicePage)
