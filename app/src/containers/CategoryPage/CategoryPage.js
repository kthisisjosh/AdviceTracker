import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import AdviceSubCategory from "../../components/DashboardPage/Display/AdviceSubCategory"
import { useHistory } from "react-router-dom"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"
import { submitSubCategory, deleteSubCategory, getAdvice } from "../../redux/actions/advice"
import NewSubCategory from "../../components/DashboardPage/Category/NewSubCategory"
import { motion, AnimatePresence } from "framer-motion"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const CategoryPage = (props) => {
    const { categories, match, submitSubCategory, user, deleteSubCategory, checked, isAuthenticated, getAdvice, token } = props
    const [currCategory, setCurrCategory] = useState({ test: "Test", subcategories: [] })
    const [toAddSubCategory, setToAddSubCategory] = useState(false)
    const [subCategoryName, setSubCategoryName] = useState("")
    const MySwal = withReactContent(Swal)
    const history = useHistory()

    useEffect(() => {
        if (checked && isAuthenticated) {
            localStorage.setItem("jwtToken", token)
            getAdvice(user.userID, categories)
            const foundCategory = categories.find((category) => category.categoryID === match.params.id) || categories[0]
            setCurrCategory(foundCategory)
        }
    }, [categories, user.userID, checked, getAdvice, match.params.id, isAuthenticated])

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

    const handleSubCategoryDelete = (category, subCategoryID, subCategoryName) => {
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
                history.push("/dashboard/category/" + currCategory.categoryID)
                deleteSubCategory(category, subCategoryID)
            }
        })
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
                {toAddSubCategory && (
                    <motion.div initial={{ scale: 1, opacity: 0 }} animate={{ opacity: 1 }} positionTransition>
                        <NewSubCategory handleChange={handleChange} handleSubmit={handleSubmit} />
                    </motion.div>
                )}

                <AnimatePresence>
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
                </AnimatePresence>
            </Grid>
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, sessionState }) => ({
    categories: adviceState.categories,
    user: sessionState.user,
    isAuthenticated: sessionState.authenticated,
    checked: sessionState.checked,
    token: sessionState.user.token,
})

const mapDispatchToProps = { submitSubCategory, deleteSubCategory, getAdvice }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
