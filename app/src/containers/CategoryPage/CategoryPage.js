import React, { Fragment, useEffect, useState } from "react"
import Header from "../../components/LandingHeader/LandingHeader"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import AdviceSubCategory from "../../components/DashboardPage/Display/AdviceSubCategory"
import { Link, useHistory } from "react-router-dom"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"
import { submitSubCategory, deleteSubCategory, getAdvice } from "../../redux/actions/advice"
import NewSubCategory from "../../components/DashboardPage/Category/NewSubCategory"

const CategoryPage = (props) => {
    const { categories, match, submitSubCategory, user, deleteSubCategory } = props
    const [currCategory, setCurrCategory] = useState({ test: "Test", subcategories: [] })
    const [toAddSubCategory, setToAddSubCategory] = useState(false)
    const [subCategoryName, setSubCategoryName] = useState("")
    const history = useHistory()

    useEffect(() => {
        const foundCategory = categories.find((category) => category.categoryID === match.params.id)
        setCurrCategory(foundCategory)
    }, [categories, user.userID])

    const handleAddClick = () => {
        setToAddSubCategory(true)
    }

    const handleSubmit = () => {
        submitSubCategory(subCategoryName, currCategory, user.userID)
        setSubCategoryName("")
        setToAddSubCategory(false)
    }

    const handleChange = (e) => {
        setSubCategoryName(e.target.value)
    }

    const handleSubCategoryDelete = (category, subcategoryID) => {
        history.push("/dashboard/category/" + currCategory.categoryID)
        deleteSubCategory(category, subcategoryID)
    }

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto", height: "auto", minHeight: "80vh" }}>
                <Grid container>
                    <Title name={currCategory.name} description={currCategory.description} isDescription={true} />
                    <AddNewButton handleAddClick={handleAddClick} />
                </Grid>
                {toAddSubCategory && <NewSubCategory handleChange={handleChange} handleSubmit={handleSubmit} />}
                {currCategory.subcategories.map((subcategory) => (
                    <AdviceSubCategory
                        subcategoryID={subcategory.subcategoryID}
                        title={subcategory.name}
                        key={subcategory.subcategoryID}
                        advice={subcategory.advice}
                        category={currCategory}
                        handleDelete={handleSubCategoryDelete}
                    />
                ))}
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, authState }) => ({
    categories: adviceState.categories,
    user: authState.user,
})

const mapDispatchToProps = { submitSubCategory, deleteSubCategory, getAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
