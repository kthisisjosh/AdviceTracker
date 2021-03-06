import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Grid, Paper, Tooltip, IconButton } from "@material-ui/core"
import { connect } from "react-redux"
import Title from "../../components/DashboardPage/Category/Title"
import Advice from "../../components/DashboardPage/Display/Advice"
import AddNewButton from "../../components/DashboardPage/Inbox/AddNewButton"
import NewAdvice from "../../components/DashboardPage/Category/NewAdvice"
import { submitAdvice, deleteAdvice, getAdvice, updateSubCategory } from "../../redux/actions/advice"
import { motion, AnimatePresence } from "framer-motion"
import { useHistory } from "react-router-dom"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import EditIcon from "@material-ui/icons/EditOutlined"

const SubCategoryPage = (props) => {
    const { categories, match, submitAdvice, user, deleteAdvice, updateSubCategory, checked, isAuthenticated, getAdvice, token } = props
    const [toAddAdvice, setToAddAdvice] = useState(false)
    const [adviceContent, setAdviceContent] = useState("")
    const [currSubCategory, setCurrSubCategory] = useState({ test: "Test", advice: [] })
    const history = useHistory()
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        if (checked && isAuthenticated) {
            localStorage.setItem("jwtToken", token)
            getAdvice(user.userID, categories)
            const foundCategory =
                categories.find((category) => category.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id)) ||
                categories[0]
            const foundSubCategory =
                foundCategory.subcategories.find((subcategory) => subcategory.subcategoryID === match.params.id) || foundCategory.subcategories[0]
            setCurrSubCategory(foundSubCategory)
        }
    }, [categories, match.params.id, checked, isAuthenticated, user.userID, getAdvice])

    const handleEditorChange = (content, editor) => {
        setAdviceContent(content)
    }

    const handleRenameClick = async () => {
        const { value: formValues } = await Swal.fire({
            title: "Rename the sub-category",
            html: '<input id="swal-input1" class="swal2-input" value="' + currSubCategory.name + '">',
            focusConfirm: false,
            preConfirm: () => {
                updateSubCategory(document.getElementById("swal-input1").value, currSubCategory.subcategoryID, history)
            },
        })
    }

    const handleAdviceDelete = (adviceID) => {
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
                deleteAdvice(adviceID)
                setTimeout(() => history.push("/dashboard"), 500)
            }
        })
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

    const handleAdviceEdit = (id) => {
        history.push("/dashboard/advice/" + id)
    }

    return (
        <Fragment>
            <Header />
            <Navbar />
            <Grid className="category-grid" container direction="column" style={{ margin: "2vh 15vw 2vh 15vw", width: "auto", height: "auto", minHeight: "80vh" }}>
                <Grid container direction="row">
                    <Grid item>
                        <Title name={currSubCategory.name} isDescription={false} />
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
                <Grid item style={{ marginTop: "2vh" }}>
                    <Paper style={{ backgroundColor: currSubCategory.color, padding: "1vh 1vw 1vh 1vw", width: "auto", height: "auto" }}>
                        {toAddAdvice && (
                            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} positionTransition>
                                <NewAdvice
                                    height={220}
                                    editorHeight={160}
                                    handleEditorChange={handleEditorChange}
                                    handleSubmit={handleAdviceSubmit}
                                />{" "}
                            </motion.div>
                        )}

                        <AnimatePresence key="animatepresence">
                            {currSubCategory.advice.map((advice) => (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 0.99 }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    positionTransition
                                    key={advice.adviceID}
                                >
                                    <Advice
                                        handleDelete={handleAdviceDelete}
                                        handleEdit={handleAdviceEdit}
                                        editIcons={true}
                                        adviceID={advice.adviceID}
                                        content={advice.content}
                                        key={advice.adviceID}
                                    />
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

const mapStateToProps = ({ adviceState, sessionState }) => ({
    categories: adviceState.categories,
    user: sessionState.user,
    checked: sessionState.checked,
    isAuthenticated: sessionState.authenticated,
    token: sessionState.user.token,
})

const mapDispatchToProps = { submitAdvice, deleteAdvice, getAdvice, updateSubCategory }

export default connect(mapStateToProps, mapDispatchToProps)(SubCategoryPage)
