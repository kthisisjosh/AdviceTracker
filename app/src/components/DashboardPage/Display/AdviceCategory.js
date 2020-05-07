import React from "react"
import { Paper, Grid, Typography, Tooltip, IconButton } from "@material-ui/core"
import AdviceSubCategory from "./AdviceSubCategory"
import { Link } from "react-router-dom"
import DeleteIcon from "@material-ui/icons/Delete"

const AdviceCategory = (props) => {
    return (
        <Grid style={{ width: "100%", height: "auto", marginBottom: "2vh" }}>
            <Paper style={{ padding: "0.25vh 1vw 1vh 1vw" }}>
                <Grid container direction="column">
                    <Link to={`/dashboard/category/${props.categoryID}`} style={{ textDecoration: "none" }} key={props.categoryID}>
                        <Grid container direction="row">
                            <Grid item>
                                <Typography variant="h3" style={{ fontWeight: "bold" }}>
                                    {props.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Delete">
                                    <IconButton onClick={() => props.handleDelete(props.advice)} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>

                        <Grid item style={{ marginTop: "-0.75vh", marginLeft: "0.15vw" }}>
                            <Typography variant="caption">{props.description}</Typography>
                        </Grid>
                    </Link>

                    {props.subcategories.length === 0 && (
                        <AdviceSubCategory title="There is currently no advice in this category." advice={[{ content: "<p>Add some!</p>" }]} />
                    )}
                    {props.subcategories.length !== 0 &&
                        props.subcategories.map((subcategory) => (
                            <Link
                                to={`/dashboard/subcategory/${subcategory.subcategoryID}`}
                                style={{ textDecoration: "none" }}
                                key={subcategory.subcategoryID}
                            >
                                <AdviceSubCategory title={subcategory.name} key={subcategory.subcategoryID} advice={subcategory.advice} />
                            </Link>
                        ))}
                </Grid>
            </Paper>
        </Grid>
    )
}

export default AdviceCategory
