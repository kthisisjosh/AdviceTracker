import React, { useState } from "react"
import { Grid, Paper, Typography, Tooltip, IconButton } from "@material-ui/core"
import Advice from "../../components/DashboardPage/Display/Advice"
import DeleteIcon from "@material-ui/icons/Delete"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { BlockPicker } from "react-color"

const AdviceSubCategory = (props) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const [color, setColor] = useState({ r: "241", g: "112", b: "19", a: "1" })
    let isTwo = false
    let isNone = false

    if (props.advice.length > 1) {
        isTwo = true
    }
    if (props.advice.length === 0) {
        isNone = true
    }

    return (
        <Grid item style={{ marginTop: "1vh", width: "auto" }}>
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}>
                <Paper style={{ backgroundColor: "#AFF4E4", padding: "1vh 1vw 1vh 1vw", width: "auto" }}>
                    <Grid container direction="column">
                        <Grid container direction="row" style={{ marginBottom: "0.5vh", marginTop: "-0.5vh" }}>
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                exit={{ opacity: 0, scale: 0 }}
                            >
                                <Grid item style={{ marginTop: "0.75vh" }}>
                                    <Link
                                        to={`/dashboard/subcategory/${props.subcategoryID}`}
                                        style={{ textDecoration: "none" }}
                                        key={props.subcategoryID + "1"}
                                    >
                                        <Typography variant="h5" style={{ fontWeight: "bold" }}>
                                            {props.title}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </motion.div>
                            <Grid item style={{ marginLeft: "1vw", marginTop: "1vh" }}>
                                <div
                                    style={{
                                        padding: "5px",
                                        background: "#fff",
                                        borderRadius: "1px",
                                        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
                                        display: "inline-block",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setDisplayColorPicker((prev) => !prev)}
                                >
                                    <div
                                        style={{
                                            width: "36px",
                                            height: "14px",
                                            borderRadius: "2px",
                                            background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                                        }}
                                    />
                                </div>
                                {displayColorPicker ? (
                                    <div
                                        style={{
                                            position: "absolute",
                                            zIndex: "2",
                                        }}
                                    >
                                        <div
                                            style={{
                                                position: "fixed",
                                                top: "0px",
                                                right: "0px",
                                                bottom: "0px",
                                                left: "0px",
                                            }}
                                            onClick={() => setDisplayColorPicker(false)}
                                        />
                                        <BlockPicker color={color} onChange={(color) => setColor(color.rgb)} />
                                    </div>
                                ) : null}
                            </Grid>
                            <Grid item style={{ marginLeft: "auto" }}>
                                <Tooltip title="Delete">
                                    <IconButton
                                        onClick={() => props.handleDelete(props.category, props.subcategoryID, props.title)}
                                        aria-label="delete"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginBottom: "0.5vh" }}>
                            {isTwo && !isNone && (
                                <>
                                    <Advice editIcons={false} content={props.advice[0].content} key={props.advice[0].adviceID} />
                                    <Advice editIcons={false} content={props.advice[1].content} key={props.advice[1].adviceID} />
                                </>
                            )}
                            {!isTwo && !isNone && <Advice editIcons={false} content={props.advice[0].content} key={props.advice[0].adviceID} />}
                            {isNone && <Advice editIcons={false} content="There is currently no advice here, add some!" key="123" />}
                        </Grid>

                        <Grid item style={{ marginTop: "-0.75vh", marginBottom: "-0.5vh" }}>
                            <motion.div
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.01 }}
                                exit={{ opacity: 0, scale: 0 }}
                            >
                                <Link
                                    to={`/dashboard/subcategory/${props.subcategoryID}`}
                                    style={{ textDecoration: "none" }}
                                    key={props.subcategoryID}
                                >
                                    <Typography variant="button" style={{ color: "#0047FF" }}>
                                        Show More
                                    </Typography>
                                </Link>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Paper>
            </motion.div>
        </Grid>
    )
}

export default AdviceSubCategory
