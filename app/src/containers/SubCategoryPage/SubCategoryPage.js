import React, { Fragment, useEffect, useState } from "react"
import Header from "../../components/LandingHeader/LandingHeader"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid, Paper } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import Advice from "../../components/DashboardPage/Display/Advice"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"
import NewAdvice from "../../components/DashboardPage/Category/NewAdvice"
import { submitAdvice } from "../../redux/actions/advice"
import { motion, AnimatePresence } from "framer-motion"

const SubCategoryPage = (props) => {
    const { categories, match, submitAdvice, user } = props
    const [toAddAdvice, setToAddAdvice] = useState(false)
    const [adviceContent, setAdviceContent] = useState("")
    const [currSubCategory, setCurrSubCategory] = useState({ test: "Test", advice: [] })

    useEffect(() => {
        const foundCategory = categories.find((category) =>
            category.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)
        )
        const foundSubCategory = foundCategory.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)
        setCurrSubCategory(foundSubCategory)
    }, [categories, match.params.id])

    const handleEditorChange = (content, editor) => {
        setAdviceContent(content)
    }

    const handleAdviceSubmit = () => {
        const foundCategory = categories.find((category) =>
            category.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)
        )
        submitAdvice(adviceContent, foundCategory, currSubCategory, user.userID)
        setAdviceContent("")
        setToAddAdvice(false)
    }

    const handleAddClick = () => {
        setToAddAdvice(true)
    }

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto", height: "auto", minHeight: "80vh" }}>
                <Grid container>
                    <Title name={currSubCategory.name} isDescription={false} />
                    <AddNewButton handleAddClick={handleAddClick} />
                </Grid>
                <Grid item style={{ marginTop: "2vh" }}>
                    <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw", width: "auto", height: "auto" }}>
                        {toAddAdvice && (
                            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} positionTransition>
                                <NewAdvice handleEditorChange={handleEditorChange} handleSubmit={handleAdviceSubmit} />{" "}
                            </motion.div>
                        )}

                        <AnimatePresence>
                            {currSubCategory.advice.map((advice) => (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.01 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    positionTransition
                                >
                                    <Advice editIcons={true} content={advice.content} key={advice.adviceID} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </Paper>
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, authState }) => ({
    categories: adviceState.categories,
    user: authState.user,
})

const mapDispatchToProps = { submitAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryPage)
