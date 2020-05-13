import React from "react"
import { Grid, Paper, Typography, IconButton, Tooltip } from "@material-ui/core"
import Scroll from "react-scroll"
import DeleteIcon from "@material-ui/icons/Delete"
import LibraryAddIcon from "@material-ui/icons/LibraryAdd"
import { motion } from "framer-motion"

var Element = Scroll.Element

const InboxElement = (props) => {
    return (
        <Element style={{ margin: "1vh", marginLeft: "0", height: "auto" }}>
            <motion.div
                initial={{ scale: 1, opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                exit={{ opacity: 0, scale: 0 }}
                positionTransition
            >
                <Paper variant="outlined" elevation={3} style={{ width: "100%" }}>
                    <Grid item style={{ marginLeft: "1.5vw", marginRight: "1.5vw", paddingTop: "0.25vh" }}>
                        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: props.advice.content }} />
                    </Grid>
                    <Grid item style={{ marginBottom: "1vh", marginLeft: "1vw" }}>
                        <Tooltip title="Add to category">
                            <IconButton onClick={() => props.handleAddToCategory(props.advice)} aria-label="add to category">
                                <LibraryAddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <IconButton onClick={() => props.handleDelete(props.advice)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Paper>
            </motion.div>
        </Element>
    )
}

export default InboxElement
