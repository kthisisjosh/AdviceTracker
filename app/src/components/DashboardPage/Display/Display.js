import React from "react"
import { Grid, Typography } from "@material-ui/core"
import AddNewButton from "../Inbox/AddNewButton"
import AdviceCategory from "./AdviceCategory.js"
import AddNewCategory from "./AddNewCategory"
import { motion, AnimatePresence } from "framer-motion"

const Display = (props) => {
    return (
        <Grid className="categories-grid" style={{ marginTop: "2vh", marginRight: "15vw", marginBottom: "20vh", marginLeft: "15vw", width: "auto", height: "auto", minHeight: "30vh" }}>
            <Grid container style={{ marginBottom: "2.5vh" }}>
                <Typography variant="h4" align="left" style={{ marginRight: "2.5vw", fontWeight: "bold" }}>
                    Categories
                </Typography>
                <AddNewButton handleAddClick={props.handleAddClick} />
            </Grid>

            {props.toAdd && (
                <motion.div initial={{ scale: 1, opacity: 0 }} animate={{ opacity: 1 }} positionTransition>
                    <AddNewCategory handleSubmit={props.handleSubmit} handleChange={props.handleChange} />
                </motion.div>
            )}

            <AnimatePresence>
                {props.categories.map((category) => (
                    <AdviceCategory
                        title={category.name}
                        description={category.description}
                        subcategories={category.subcategories}
                        categoryID={category.categoryID}
                        handleDelete={props.handleCategoryDelete}
                        category={category}
                        key={category.categoryID}
                        handleSubCategoryDelete={props.handleSubCategoryDelete}
                    />
                ))}
            </AnimatePresence>
        </Grid>
    )
}

export default Display
