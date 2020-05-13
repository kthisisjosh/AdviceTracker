import React, { Fragment, useEffect, useState } from "react"
import Header from "../Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Inbox from "../../components/DashboardPage/Inbox/Inbox"
import Display from "../../components/DashboardPage/Display/Display"
import { connect } from "react-redux"
import { Helmet } from "react-helmet"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import AddIcon from "@material-ui/icons/Add"

import {
    getInboxAdvice,
    getAdvice,
    submitInboxAdvice,
    deleteInboxAdvice,
    submitCategory,
    deleteCategory,
    deleteSubCategory,
    submitAdvice,
} from "../../redux/actions/advice"

const DashboardPage = (props) => {
    const {
        getInboxAdvice,
        getAdvice,
        deleteInboxAdvice,
        deleteCategory,
        deleteSubCategory,
        inboxAdvice,
        submitCategory,
        submitInboxAdvice,
        session,
        user,
        categories,
        token,
        submitAdvice,
    } = props
    const history = useHistory()
    const [toAddInbox, setToAddInbox] = useState(false)
    const [toAddCategory, setToAddCategory] = useState(false)
    const [submitCategoryInfo, setSubmitCategory] = useState({ title: "", description: "" })
    const [submitAdviceContent, setSubmitAdviceContent] = useState("")
    const MySwal = withReactContent(Swal)

    useEffect(() => {
        if ((!inboxAdvice.length || inboxAdvice) && session.authenticated && session.checked) {
            localStorage.setItem("jwtToken", token)
            getInboxAdvice(user.userID)
            getAdvice(user.userID, categories)
        } else if (session.checked && !session.authenticated) {
            history.push("/login")
        }
    }, [getInboxAdvice, history, inboxAdvice.length, session, getAdvice, user, categories])

    // --------- Category --------- \\
    const handleAddClickCategory = () => {
        setToAddCategory(true)
    }

    const handleSubmitCategory = () => {
        submitCategory(submitCategoryInfo, user.userID || user.id)
        setSubmitCategory({ title: "", description: "" })
        setToAddCategory(false)
    }

    const handleCategoryChange = (e) => {
        if (e.target.name === "title") {
            setSubmitCategory({ title: e.target.value, description: submitCategoryInfo.description })
        } else {
            setSubmitCategory({ title: submitCategoryInfo.title, description: e.target.value })
        }
    }

    // --------- Inbox --------- \\

    const handleAddClickInbox = () => {
        setToAddInbox(true)
    }

    const handleSubmitInbox = () => {
        submitInboxAdvice(submitAdviceContent, user.userID)
        setSubmitAdviceContent("")
        setToAddInbox(false)
    }

    const handleEditorChange = (content, editor) => {
        setSubmitAdviceContent(content)
    }

    const handleCategoryAddClick = (advice, subcategory, category) => {
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
                submitAdvice(advice.content, category, subcategory, user.userID)
                deleteInboxAdvice(advice)
            }
        })
    }

    const handleAddToCategory = (advice) => {
        const displayHtml = (
            <>
                {" "}
                {categories.map((category) => {
                    return (
                        <>
                            <h4>{category.name}</h4>
                            {category.subcategories.map((subcategory) => (
                                <Button
                                    variant="contained"
                                    onClick={() => handleCategoryAddClick(advice, subcategory, category)}
                                    style={{ backgroundColor: "#F2994A", marginRight: "0.25vw" }}
                                    startIcon={<AddIcon />}
                                >
                                    {subcategory.name}
                                </Button>
                            ))}
                        </>
                    )
                })}
            </>
        )
        MySwal.fire({
            title: <p>Where do you want to add this advice to?</p>,
            html: displayHtml,
        })
    }

    const handleInboxDelete = (advice) => {
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
                deleteInboxAdvice(advice)
            }
        })
    }

    // --------- Display --------- \\

    const handleCategoryDelete = (categoryID, categoryName) => {
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
                deleteCategory(categoryID)
            }
        })
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
                deleteSubCategory(category, subCategoryID)
            }
        })
    }

    return (
        <Fragment>
            <Helmet>
                <title>Dashboard | AdviceTracker</title>
                <meta
                    name="description"
                    content="Sort & organize your advice by categories, sub-categories, and genre. Format it however you'd like! Track all of the awesome advice you are given, so you are always one step ahead."
                />
                <link rel="canonical" href="https://advicetracker.life/dashboard" />
            </Helmet>
            <Header />
            <Navbar />
            <Inbox
                inbox={inboxAdvice}
                handleAddToCategory={handleAddToCategory}
                handleDelete={handleInboxDelete}
                handleAddClick={handleAddClickInbox}
                handleSubmit={handleSubmitInbox}
                handleEditorChange={handleEditorChange}
                toAdd={toAddInbox}
            />
            {true && (
                <Display
                    handleAddClick={handleAddClickCategory}
                    handleSubmit={handleSubmitCategory}
                    handleChange={handleCategoryChange}
                    toAdd={toAddCategory}
                    categories={categories}
                    handleCategoryDelete={handleCategoryDelete}
                    handleSubCategoryDelete={handleSubCategoryDelete}
                />
            )}
            <Footer />
        </Fragment>
    )
}

const mapStateToProps = ({ adviceState, sessionState }) => ({
    inboxAdvice: adviceState.inboxAdvice,
    user: sessionState.user,
    categories: adviceState.categories,
    session: sessionState,
    token: sessionState.user.token,
})

const mapDispatchToProps = {
    submitAdvice,
    getAdvice,
    getInboxAdvice,
    submitInboxAdvice,
    deleteInboxAdvice,
    submitCategory,
    deleteCategory,
    deleteSubCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
