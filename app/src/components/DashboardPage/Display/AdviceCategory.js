import React from "react"
import { Paper, Grid, Typography, Tooltip, IconButton } from "@material-ui/core"
import AdviceSubCategory from "../../../containers/CategoryPage/AdviceSubCategory"
import { Link } from "react-router-dom"
import DeleteIcon from "@material-ui/icons/Delete"
import { motion, AnimatePresence } from "framer-motion"

const AdviceCategory = (props) => {
    return (
        <Grid style={{ width: "100%", height: "auto", marginBottom: "2vh" }}>
            <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }} positionTransition>
                <Paper style={{ padding: "0.25vh 1vw 1vh 1vw" }}>
                    <Grid container direction="column">
                        <Grid container direction="row">
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                exit={{ opacity: 0, scale: 0 }}
                            >
                                <Link to={`/dashboard/category/${props.categoryID}`} style={{ textDecoration: "none" }} key={props.categoryID}>
                                    <Grid item>
                                        <Grid item>
                                            <Typography variant="h3" style={{ fontWeight: "bold" }}>
                                                {props.title}
                                            </Typography>
                                        </Grid>

                                        <Grid item style={{ marginTop: "-0.75vh", marginLeft: "0.15vw" }}>
                                            <Typography variant="caption">{props.description}</Typography>
                                        </Grid>
                                    </Grid>
                                </Link>
                            </motion.div>

                            <Grid item style={{ marginLeft: "auto" }}>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => props.handleDelete(props.categoryID, props.title)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>

                        {props.subcategories.length === 0 && (
                            <Link to={`/dashboard/category/${props.categoryID}`}>
                                <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw", width: "auto", height: "5vh" }} />
                            </Link>
                        )}
                        <AnimatePresence>
                            {props.subcategories.length !== 0 &&
                                props.subcategories.map((subcategory) => (
                                    <AdviceSubCategory
                                        category={props.category}
                                        subcategoryID={subcategory.subcategoryID}
                                        title={subcategory.name}
                                        key={subcategory.subcategoryID}
                                        color={subcategory.color}
                                        advice={subcategory.advice}
                                        handleDelete={props.handleSubCategoryDelete}
                                    />
                                ))}
                        </AnimatePresence>
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default AdviceCategory
