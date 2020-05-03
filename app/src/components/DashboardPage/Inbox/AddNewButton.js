import React from "react"
import { Button } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';

const AddNewButton = (props) => {
    return (
        <Button variant="contained" onClick={props.handleAddClick} style={{ backgroundColor: "F2994A" }} startIcon={<AddIcon />}>
            Add New
        </Button>
    )
}

export default AddNewButton
