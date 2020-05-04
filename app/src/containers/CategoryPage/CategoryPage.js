import React, { Fragment, useEffect, useState } from "react"
import Header from "../../components/LandingHeader/LandingHeader"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Typography, Grid } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import AdviceSubCategory from "../../components/DashboardPage/Display/AdviceSubCategory"
import { Link } from "react-router-dom"

const CategoryPage = (props) => {
    const { categories, match } = props
    const [currCategory, setCurrCategory] = useState({ test: "Test", subcategories: [] })

    useEffect(() => {
        const foundCategory = categories.find((category) => category.categoryID === match.params.id)
        setCurrCategory(foundCategory)
    }, [])

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto" }}>
                <Title category={currCategory} />
                {currCategory.subcategories.map((subcategory) => (
                    <Link to={`/dashboard/subcategory/${subcategory.subcategoryID}`} style={{ textDecoration: "none" }}>
                        <AdviceSubCategory title={subcategory.name} key={subcategory.subcategoryID} advice={subcategory.advice} />
                    </Link>
                ))}
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState }) => ({
    categories: adviceState.categories,
})

export default connect(mapStateToProps)(CategoryPage)
