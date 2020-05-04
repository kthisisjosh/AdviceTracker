import React from "react"
import { Grid, Typography } from "@material-ui/core"
import AddNewButton from "../Inbox/AddNewButton"
import AdviceCategory from "./AdviceCategory.js"

const Display = (props) => {
    return (
        <Grid style={{ marginTop: "2vh", marginRight: "15vw", marginBottom: "3vh", marginLeft: "15vw", width: "auto", height: "auto" }}>
            <Grid container style={{ marginBottom: "2.5vh" }}>
                <Typography variant="h4" align="left" style={{ marginRight: "2.5vw" }}>
                    Categories
                </Typography>
                <AddNewButton handleAddClick={null} />
            </Grid>
            {props.categories.map((category) => (
                <AdviceCategory
                    title={category.name}
                    description={category.description}
                    subcategories={category.subcategories}
                    key={category.categoryID}
                />
            ))}
        </Grid>
    )
}

export default Display