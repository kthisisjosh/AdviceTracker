import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { motion } from "framer-motion"

const BodyA = () => {
    return (
        <Grid container>
            <Grid item md={6} xs={12} style={{ height: "auto", display: "block", width: "100vw", textAlign: "center" }}>
                <Grid className="landing-bodya" item style={{ width: "35vw", margin: "0 auto", marginLeft: "13vw", display: "inline-block" }}>
                    <Typography className="landing-bodya-h4" variant="h4" align="left">
                        Never forget the crucial advice you are given
                    </Typography>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography className="landing-bodya-h6" variant="h6" align="left" style={{ marginBottom: "15px" }}>
                            Sort advice by how you want it sorted
                        </Typography>
                        <Typography className="landing-bodya-body2" variant="body2" align="left">
                            Create multiple categories to efficiently sort advice your way. Create sub-categories from those categories to have full
                            customization and control over how you sort things.
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginTop: "25px" }}>
                        <Typography className="landing-bodya-h6" variant="h6" align="left" style={{ marginBottom: "15px" }}>
                            Format advice to highlight the most important part
                        </Typography>
                        <Typography className="landing-bodya-body2" variant="body2" align="left">
                            Each advice you create is fully formattable - bold, underline, title and more.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item md={6} xs={12} className="landing-bodya-demo" style={{ textAlign: "center" }}>
                <motion.img
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        default: { duration: 0.75 },
                    }}
                    alt="demo"
                    style={{ height: "600px", width: "475px", margin: "auto", marginRight: "3vw", borderRadius: "15px" }}
                    src="./login-sample2.png"
                />
            </Grid>
        </Grid>
    )
}

export default BodyA
