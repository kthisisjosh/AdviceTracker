import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid, IconButton, Tooltip } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import AdviceSubCategory from "./AdviceSubCategory"
import { useHistory } from "react-router-dom"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"
import { submitSubCategory, deleteSubCategory, getAdvice, updateCategory } from "../../redux/actions/advice"
import NewSubCategory from "../../components/DashboardPage/Category/NewSubCategory"
import { motion, AnimatePresence } from "framer-motion"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import EditIcon from "@material-ui/icons/EditOutlined"

const CategoryPage = (props) => {
    const { categories, match, submitSubCategory, user, deleteSubCategory, checked, isAuthenticated, getAdvice, token, updateCategory } = props
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

    const handleRenameClick = async () => {
        const { value: formValues } = await Swal.fire({
            title: "Rename the category & description",
            html:
                '<input id="swal-input1" class="swal2-input" value="' +
                currCategory.name +
                '">' +
                '<input id="swal-input2" class="swal2-input" value="' +
                currCategory.description +
                '">',
            focusConfirm: false,
            preConfirm: () => {
                updateCategory(document.getElementById("swal-input1").value, document.getElementById("swal-input2").value, currCategory.categoryID, history)
            },
        })
    }

    const handleSubmit = () => {
        submitSubCategory(subCategoryName, currCategory, user.userID)
        setSubCategoryName("")
        setToAddSubCategory(false)
    }

    const handleSubCategoryChange = (e) => {
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
                <Grid container direction="row">
                    <Grid item>
                        <Title name={currCategory.name} description={currCategory.description} isDescription={true} />
                    </Grid>
                    <Grid item style={{ marginLeft: "0.6vw", marginTop: "0.4vh" }}>
                        <Tooltip title="Rename">
                            <IconButton onClick={handleRenameClick} aria-label="Rename" style={{ color: "grey" }}>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item style={{ marginTop: "1.1vh", marginLeft: "1vw" }}>
                        <AddNewButton handleAddClick={handleAddClick} />
                    </Grid>
                </Grid>
                {toAddSubCategory && (
                    <motion.div initial={{ scale: 1, opacity: 0 }} animate={{ opacity: 1 }} positionTransition>
                        <NewSubCategory handleChange={handleSubCategoryChange} handleSubmit={handleSubmit} />
                    </motion.div>
                )}

                <AnimatePresence>
                    {currCategory.subcategories.map((subcategory) => (
                        <AdviceSubCategory
                            subcategoryID={subcategory.subcategoryID}
                            title={subcategory.name}
                            color={subcategory.color}
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

const mapDispatchToProps = { submitSubCategory, deleteSubCategory, getAdvice, updateCategory }

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
