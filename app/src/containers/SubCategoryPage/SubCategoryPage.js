import React, { Fragment, useEffect, useState } from "react"
import Header from "../../components/LandingHeader/LandingHeader"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import Advice from "../../components/DashboardPage/Display/Advice"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"

const SubCategoryPage = (props) => {
    const { categories, match } = props
    const [currSubCategory, setCurrSubCategory] = useState({ test: "Test", advice: [] })

    useEffect(() => {
        const foundCategory = categories.find((category) =>
            category.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)
        )
        const foundSubCategory = foundCategory.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)
        setCurrSubCategory(foundSubCategory)
    }, [])

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto", height: "80vh" }}>
                <Grid container>
                    <Title name={currSubCategory.name} isDescription={false} />
                    <AddNewButton handleAddClick={props.handleAddClick} />
                </Grid>
                <Grid item style={{ marginTop: "2vh" }}>
                    {currSubCategory.advice.map((advice) => (
                        <Advice content={advice.content} key={advice.adviceID} />
                    ))}
                </Grid>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState }) => ({
    categories: adviceState.categories,
})

export default connect(mapStateToProps)(SubCategoryPage)
